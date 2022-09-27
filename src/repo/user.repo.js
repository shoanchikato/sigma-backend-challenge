function userRepoFactory(collection) {
  const getAll = async () => await collection.find().toArray();

  const getById = async (id) => await collection.findOne({ _id: id });

  return { getAll, getById };
}

module.exports = userRepoFactory;
