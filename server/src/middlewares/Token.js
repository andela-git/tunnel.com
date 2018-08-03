/**
 * Token middleware for signing and verifying token claims
 */
import jwt from 'jsonwebtoken';

module.exports = {
  /**
   * verify a request token
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  verifyToken(request, res, next) {
    const token = request;
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
            body: ['internal server error'],
          },
        });
      }
      // token verified successfully return next
      req.UserId = decoded.id;
    });
    return next();
  },
};
