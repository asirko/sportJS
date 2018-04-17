const userStorage = require('../../data/user.mock');
const auth = require('../../auth.middleware');

exports.getUser = function(req, res) {
  console.log('get User: ', req.body.login);
  const user = userStorage.getUserByLoginAndPassword(req.body.login, req.body.password);

  if (user) {
    res.header('Authorization', `Bearer ${user.id}-${new Date().getTime()}`);
    res.json(user);
  } else {
    res.status(403)
      .send('Not authorized');
  }
};

exports.createUser = function (req, res) {
  const user = req.body;
  console.log('Create User', JSON.stringify(user));
  if (userStorage.getUserByLogin(user.login)) {
    res.status(409).send();
    return;
  }
  const updatedUser = userStorage.addUser(user);
  res.status(200).send(updatedUser);
};

exports.updateUser = function (req, res) {
  const id = +req.params.id;
  const user = req.body;
  userStorage.updateUserById(id, user);
  res.send(user);
};

exports.refreshUser = function(req, res) {
  const userId = auth.getUserId(req);
  const user = userStorage.getUserById(userId);
  console.log('Refresh user: ', user);

  if (user) {
    res.json(user);
  } else {
    res.status(404)
      .send('Not found');
  }
};

exports.logout = function(req, res) {
  console.log('Logout user: ', userStorage.getUserById(auth.getUserId(req)));
  req.header('Authorization', null);
  res.status(200).send();
};
