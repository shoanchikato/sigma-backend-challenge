function userRepoFactory() {
  const users = [
    {
      id: 1,
      name: "John",
      surname: "Doe",
      streams: 1,
    },
    {
      id: 2,
      name: "Jane",
      surname: "Doe",
      streams: 2,
    },
    {
      id: 3,
      name: "Jenny",
      surname: "Doe",
      streams: 3,
    },
  ];

  const getAll = () => users;

  const getById = (id) => users.find((user) => user.id === id);

  return { getAll, getById };
}

module.exports = userRepoFactory;
