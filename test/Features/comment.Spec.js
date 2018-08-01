/**
 * Comments tests
 */

import chai from 'chai';
import chaiHttp from 'chai-http';

const { should } = chai.should();
const { expect } = chai;

chai.use(chaiHttp);

describe('Comments test cases', () => {
    it('should allow only authenticated user make a comment', (done) => {
      chai.request(process.env.HOST)
      .post('/api/v1/comment:postId')
      .end((err, res) => {
          res.should.have.status(200)
          .res.body.should.have.propert('error')
      })
      done();
    });
});