/**
 * Test for our server to know if the app is running
 * @author Wale Ayandiran
 * */

import http from 'http';
import chai from 'chai';

import '../server/src/index';

describe('Tunnel Node Server', () => {
  it('should return 200', (done) => {
    http.get(process.env.HOST || 'http://127.0.0.1:7000', (res) => {
      chai.assert.equal(200, res.statusCode);
      done();
    });
  });
});
