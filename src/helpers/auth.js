import jwt from 'jsonwebtoken';

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    req.isAuth = false;
    return next();
  }
  let decodedToken;
  try {
    decodedToken = jwt.verify(authorization, process.env.JWT);
    req.isAuth = true;
    req.isVerified = decodedToken.isVerified;
    req.userId = decodedToken.id;
  } catch (error) {
    req.isAuth = false;
    return next();
  }
  return next();
};
