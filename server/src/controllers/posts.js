/**
 * Posts controller
 */
// import Sequelize from 'sequelize';
import models from '../../models';
import verifyToken from '../middlewares/Token';

// const { Op } = Sequelize.Op;

module.exports = {
  create(req, res) {
    models.Post.create(req.body);
    res.status(201).send({
      success: true,
      message: `post created successfully by ${res.Id}`,
    });
  },
};
