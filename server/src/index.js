/**
 * @./src/index.js Http Server point setup
 * @author Wale Ayandiran
 * @requires NPM:http
 * @requires app
 */

import http from 'http';
import app from '../app';

// setup port ton listen from env port if its set else default to port 8000
const port = parseInt(process.env.PORT, 10) || 9000;
app.set('port', port);

// create actual actual http server and listen for connections
const server = http.createServer(app);
server.listen(port);

console.log(`server listening on port: ${port}`);
