// /**
//  * @author Wale ayandiran
//  * routes file for all endpoints
//  */
// import express from 'express';

// import UserController from '../controllers/users';
// import PostController from '../controllers/posts';
// import verifyToken from '../middlewares/Token';

// const app = express();
// const router = express.Router();

// app.use('/api', router);

// // GET route for aimless /api routes
// router.get('/api', (req, res) => res.status(200).send({
//   message: 'successful',
//   data: 'Api in version 1.0.0 currently, the endpoints are available in the format /api/v1/ ',
// }));

// /**
//    * Routes for Users
//    */
// router.post('/v1/user/new', UserController.create);
// router.post('/v1/user/login', UserController.login);

// // DemoToken for test purposes only
// router.get('/getToken', UserController.getToken);

// /**
//    * Post/articles routes
//    */
// router.post('/v1/post/new', verifyToken, PostController.create);

// export default router;
