/**
 * verifyToken
 */

import jwt from 'jsonwebtoken';

function verifyToken(req, res, next) {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(403).send({
      auth: false,
      error: {
        body: ['No token provided'],
      },
    });
  }
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).send({
        auth: false,
        error: {
          body: ['Access could not be verified'],
        },
      });
    }
    // token verified successfully return next
    req.UserId = decoded.id;
    return next();
  });
}

export default verifyToken;
