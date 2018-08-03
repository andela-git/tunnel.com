/**
 * @app.js Application's app root file for express, morgan, body-parser & default route setup
 * @author Wale Ayandiran
 * @requires NPM:express
 * @requires NPM:morgan
 * @requires NPM:express
 * @requires NPM:path
 */

import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

require('dotenv').config();

// load routes into the application
// import routes from './src/router/routes';

// set up expres app
const app = express();

// Log request to the console using morgan
app.use(logger('combined'));

// parse incoming requests data as json & respond as json using bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes(app);
require('./src/routes/routes')(app);
// setup a default cathch all route for lost/wrong api endpoints
// app.get('*', (req, res) => res.status(200).send({
//   status: 200,
//   data: {
//     message: 'alice in wonderland',
//   },
// }));

module.exports = app;
