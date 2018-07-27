/**
 * @author Wale ayandiran
 * routes file for all endpoints
 */
import UserController from '../controllers/users';

module.exports = (app) => {
  // GET route for aimless /api routes
  app.get('/api/', (req, res) => res.status(200).send({
    message: 'successful',
    data: 'Api in version 1.0.0 currently, the following endpoints are available...',
  }));

  /**
   * Post routes for Users
   */

  app.post('/api/v1/user/new', UserController.create);
  app.post('/api/v1/user/login', UserController.login);
};
