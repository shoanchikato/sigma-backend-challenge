function streamServiceFactory() {
  const modifyUserStreams = (payload, user) => {
    const [inc, dec] = ["increase", "decrease"];

    let newStreamsValue = user.streams;

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

  return { modifyUserStreams };
}

module.exports = streamServiceFactory;
