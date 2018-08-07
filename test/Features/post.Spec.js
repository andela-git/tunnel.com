/**
 * Posts endpoints
 */
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe('Post Endpoints', () => {
  it('/Post: /api/v1/posts/new can save post to db', (done) => {
    chai.request(`${process.env.HOST}:${process.env.PORT}`)
      .post('/api/v1/posts/new')
      .type('form')
      .send({
        _method: 'post',
        userId: 1,
        title: 'post title',
        content: 'content',
        clapCount: 0,
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have.property('data');
      });
    done();
  });

  // it('/Get: /api/v1/posts gets a max of 10 posts chronologically', (done) => {
  //   chai.request(`${process.env.HOST}:${process.env.PORT}`)
  //     .get('/api/v1/posts:')
  //     .end((err, res) => {
  //       res.should.have.status(200);
  //       res.should.have.property('data');
  //     });
  //   done();
  // });

  // it('/Get: /api/v1/posts:id gets a single posts with attributes', (done) => {
  //   chai.request(`${process.env.HOST}:${process.env.PORT}`)
  //     .get('/api/v1/posts:id')
  //     .end((err, res) => {
  //       res.should.have.status(200);
  //       res.body.should.have.property('data');
  //     });
  //   done();
  // });

  // it('/PUT: /api/v1/posts/update:id update all field of a single posts with attributes', (done) => {
  //   chai.request(`${process.env.HOST}:${process.env.PORT}`)
  //     .put('/api/v1/posts/update:id')
  //     .end((err, res) => {
  //       res.should.have.status(201);
  //       res.body.should.have.property('data');
  //     });
  //   done();
  // });

  // it('/PATCH: /api/v1/posts/update:id update a single field in a post', (done) => {
  //   chai.request(`${process.env.HOST}:${process.env.PORT}`)
  //     .patch('/api/v1/posts/update:id')
  //     .end((err, res) => {
  //       res.should.have.status(201);
  //       res.body.should.have.property('data');
  //     });
  //   done();
  // });

  // it('/Delete: /api/v1/posts/delete:id gets a single posts with attributes', (done) => {
  //   chai.request(`${process.env.HOST}:${process.env.PORT}`)
  //     .del('/api/v1/posts/delete:id')
  //     .end((err, res) => {
  //       res.should.have.status(200);
  //       res.body.should.have.property('data');
  //     });
  //   done();
  // });
});
