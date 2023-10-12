const users = [];

const addUser = ({ id, username, room }) => {
  // clear the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // validate the data
  if (!username || !room) {
    return {
      error: "Both the 'username' and 'room' are required!",
    };
  }

  // check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username == username;
  });

  // validate username
  if (existingUser) {
    return {
      error: `Username "${username}" is taken in the room "${room}"`,
    };
  }

  // store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  // find users index
  const index = users.findIndex((user) => user.id === id);

  // change users array on place (mutate)
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  // find user in users array
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  // find user in specific room
  return users.filter((user) => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
