async function populateDb(collection) {
  const users = [
    {
      _id: 1,
      name: "John",
      surname: "Doe",
      streams: 1,
    },
    {
      _id: 2,
      name: "Jane",
      surname: "Doe",
      streams: 2,
    },
    {
      _id: 3,
      name: "Jenny",
      surname: "Doe",
      streams: 3,
    },
  ];

  const dbUsers = await collection.find().toArray();

  if (dbUsers.length < 1) {
    try {
      const result = await collection.insertMany(users);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = populateDb;
