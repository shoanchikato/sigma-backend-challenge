function streamServiceFactory(repo) {
  const modifyUserStreams = async (id, payload) => {
    const [inc, dec] = ["increase", "decrease"];
    let user = await getUserById(id);

    let newStreamsValue = parseInt(user.streams);

    if (payload.action === inc) {
      newStreamsValue += payload.streams;
    } else if (payload.action === dec) {
      newStreamsValue -= payload.streams;
    } else {
      throw new Error(`'${payload.action}' unknown action`);
    }

    if (newStreamsValue > 3) {
      throw new Error("excessed streaming limit of 3");
    } else if (newStreamsValue < 0) {
      throw new Error("streams can't not be less than 0");
    } else {
      user.streams = newStreamsValue;
    }

    return user;
  };

  const getUserById = async (id) => {
    const user = await repo.getById(id);

    if (!user) {
      throw new Error(`user ${id} not found`);
    }

    return user;
  };

  return { modifyUserStreams };
}

module.exports = streamServiceFactory;
