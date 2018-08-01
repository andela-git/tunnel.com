/**
 * Testing file for Users route
 */

import chai from 'chai';
import chaiHttp from 'chai-http';

const { should } = chai.should();
const { expect } = chai;

chai.use(chaiHttp);

// playground with test datas
// database for tests, migration

// actual call to main route/function

// assert the calls passes


describe('Account Authentication', () => {
  it('User should be able to create an account', (done) => {
    chai.request(process.env.HOST)
      .post('/api/v1/user/new')
      .type('form')
      .send({
        _method: 'post',
        username: 'walecloud',
        email: 'walecloud@gmail.com',
        password: 'password',
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have.property('data');
        console.log(res.body);
        done();
      });
    done();
  });

  it('User should be able to login with email & password', (done) => {
    chai.request(process.env.HOST)
      .post('/api/v1/user/login')
      .type('form')
      .send({
        _method: 'post',
        email: 'walecloud@gmail.com',
        password: 'password',
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('data');
      });
    done();
  });

  it('User should be able to login with username & password', (done) => {
    chai.request(process.env.HOST)
      .post('/api/v1/user/login')
      .type('form')
      .send({
        _method: 'post',
        username: 'walecloud',
        password: 'password',
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('data');
      });
    done();
  });

  it('Catch already registered email or username', (done) => {
    chai.request(process.env.HOST)
      .post('/api/v1/user/new')
      .type('form')
      .send({
        _method: 'post',
        username: 'walecloud',
        password: 'password',
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('error');
      });
    done();
  });

});
