
const jwt = require('jsonwebtoken');

module.exports.checkUser = (req, res, next) => {
  const token = req.headers.authorization;


  if (token) {

    const decode = jwt.decode(token, 'jsonwebtoken');


    if (decode) {

      req.userId = decode.id;
      req.isAdmin = decode.idAdmin;


      return next();
    } else {
      return res.status(401).json({
        status: 'error',
        message: 'You are not authorised'
      });
    }

    next();

  } else {
    return res.status(401).json({
      status: 'error',
      message: 'you are not authorised'
    });

  }
}