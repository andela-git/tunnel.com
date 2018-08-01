/**
 * Posts endpoints 
 */
import chai from 'chai';
import chaiHttp from 'chai-http';

const { should } = chai.should();
const { expect } = chai;

chai.use(chaiHttp);

describe('Post Endpoints', () => {
    it('/Get: /api/v1/posts/create  verify if token is available to access the route', (done) => {
      chai.request(process.env.HOST)
      .get('/api/v1/posts/create')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('error');
      })
      done();
    });
  
    it('/Post: /api/v1/posts/create can save post to db', (done) => {
      chai.request(process.env.HOST)
      .post('/api/v1/posts/create')
      .type('form')
      .send({
        _method: 'post',
        userId: id,
        title: 'post title',
        content: 'content',
        clapCount: 0
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('data');
      })
      done();
    });

    it('/Get: /api/v1/posts gets a max of 10 posts chronologically', (done) => {
        chai.request(process.env.HOST)
        .get('/api/v1/posts:')
        .end((err, res) => {
            res.should.have.status(200);
            res.should.have.property('data');
        })
        done();
    });

    it('/Get: /api/v1/posts:id gets a single posts with attributes', (done) => {
        chai.request(process.env.HOST)
        .get('/api/v1/posts:id')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('data');
        })
        done();
    });

    it('/PUT: /api/v1/posts/update:id update all field of a single posts with attributes', (done) => {
        chai.request(process.env.HOST)
        .put('/api/v1/posts/update:id')
        .end((err, res) => {
            res.should.have.status(201);
            res.body.should.have.property('data');
        })
        done();
    });

    it('/PATCH: /api/v1/posts/update:id update a single field in a post', (done) => {
        chai.request(process.env.HOST)
        .patch('/api/v1/posts/update:id')
        .end((err, res) => {
            res.should.have.status(201);
            res.body.should.have.property('data');
        })
        done();
    });

    it('/Delete: /api/v1/posts/delete:id gets a single posts with attributes', (done) => {
        chai.request(process.env.HOST)
        .del('/api/v1/posts/delete:id')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('data');
        })
        done();
    });
  });