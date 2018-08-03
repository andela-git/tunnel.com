/**
 * @author Wale ayandiran
 * routes file for all endpoints
 */
import express from 'express';

import UserController from '../controllers/users';
import PostController from '../controllers/posts';
import verifyToken from '../middlewares/Token';

const app = express();
// GET route for aimless /api routes
app.get('/api/', (req, res) => res.status(200).send({
  message: 'successful',
  data: 'Api in version 1.0.0 currently, the endpoints are available in the format /api/v1/ ',
}));

/**
   * Routes for Users
   */
app.post('/api/v1/user/new', UserController.create);
app.post('/api/v1/user/login', UserController.login);

/**
   * Post/articles routes
   */
// app.post('/api/v1/post/new', verifyToken, PostController.create);

export default app;
