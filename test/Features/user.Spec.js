/**
 * Testing file for Users route
 * @sequelize-mock for database testing
 */

import chai from 'chai';
import chaiHttp from 'chai-http';

import users from '../mock/users';

chai.use(chaiHttp);

// playground with test datas
// database for tests, migration

// actual call to main route/function

// assert the calls passes

describe('Account Authentication', () => {
  // beforeEach(() => {
  //   models.User.destroy({ where: {} });
  //   models.User.create(users.user1);
  // });

  it('User should be able to create an account', (done) => {
    chai.request(`${process.env.HOST}:${process.env.PORT}`)
      .post('/api/v1/user/new')
      .type('form')
      .send(users.user1)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have.property('data');
        console.log(res.body);
        done();
      });
    done();
  });

  it('User should be able to login with email & password', (done) => {
    chai.request(`${process.env.HOST}:${process.env.PORT}`)
      .post('/api/v1/user/login')
      .type('form')
      .send({
        _method: 'post',
        email: users.user1.email,
        password: users.user1.password,
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('auth');
      });
    done();
  });

  it('User should be able to login with username & password', (done) => {
    chai.request(`${process.env.HOST}:${process.env.PORT}`)
      .post('/api/v1/user/login')
      .type('form')
      .send({
        _method: 'post',
        email: users.user1.username,
        password: users.user1.password,
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('auth');
      });
    done();
  });

  it('Catch already registered email or username', (done) => {
    chai.request(`${process.env.HOST}:${process.env.PORT}`)
      .post('/api/v1/user/new')
      .type('form')
      .send(users.user1Replica)
      .end((err, res) => {
        res.should.have.status(409);
        res.body.should.have.property('error');
      });
    done();
  });
});
