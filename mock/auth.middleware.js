
const TOKEN_VALIDITY_IN_MINUTES = 30;
const BEARER = 'Bearer ';

exports.getUserId = getUserId;
exports.middleware = middleware;

function middleware (req, res, next) {

  // check authorization to come in
  // make sure user is allowed to that route (white listed)
  if (!isWhiteList(req) && !authorizationIsValid(req.header('authorization'))) {
    res.status(401).send();
    return;
  }

  // overload method send to get out
  const simpleSend = res.send;
  res.send = function (json) {
    if (authorizationIsValid(req.header('authorization')) && res.statusCode < 400) {
      const userId = getUserId(req);
      res.header('Authorization', `${BEARER}${userId}-${new Date().getTime()}`);
    }

    simpleSend.apply(res, [json]);
  };

  // allow to continue in the app
  next();
}

function authorizationIsValid(authorization) {
  return tokenIsValid(getToken(authorization));
}

function getToken(authorization) {
  const strToken = authorization
    && new RegExp(`^${BEARER}.+$`).test(authorization)
    && authorization.replace(BEARER, '');
  return /^\d+-\d+$/.test(strToken) ? strToken : null;
}

function tokenIsValid(token) {
  if (!token) {
    return false;
  }
  const dateTime = +token.split('-')[1];
  const msNow = new Date().getTime();
  const msSinceToken = msNow - dateTime;
  return msSinceToken < TOKEN_VALIDITY_IN_MINUTES * 60 * 1000;
}

function isWhiteList (req) {
  const whiteList = [
    'POST /users/login'
  ];

  return whiteList.map(w => w.split(' '))
    .map(([method, url]) => req.method === method && req.url === url)
    .reduce((hasOneTrue, currentBoolean) => hasOneTrue || currentBoolean, false);
}

function getUserId(req) {
  const authorization = req.header('authorization');
  const token = getToken(authorization);
  return token ? +token.split('-')[0] : null;
}
