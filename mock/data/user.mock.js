
const users = [
  {
    id: 0,
    login: 'test',
    password: ''
  }
];

exports.getUserById = function (id) {
  return users.find(user => user.id === id);
};

exports.getUserByLogin = function (login) {
  return users.find(user => user.login === login);
};

exports.getUserByLoginAndPassword = function (login, password) {
  const foundUser = users.find(user => user.login === login);
  if (foundUser && foundUser.password === password) {
    return cloneWithoutPassword(foundUser);
  } else {
    return null;
  }
};

exports.updateUserById = function (id, user) {
  users[id] = Object.assign(users[id], user);
};

exports.addUser = function (user) {
  const storedUser = Object.assign({id: users.length}, user);
  users.push(storedUser);
  return cloneWithoutPassword(storedUser);
};

function cloneWithoutPassword(user) {
  const newUser = Object.assign({}, user);
  delete newUser.password;
  return newUser;
}
