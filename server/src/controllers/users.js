/**
 * @author Wale Ayandiran
 * Users controller to manage users account and interaction
 * with the application.
 */

import Sequelize from 'sequelize';
import bycrypt from 'bcrypt';
import { User } from '../../models';


const { Op } = Sequelize.Op;
module.exports = {

  create(req, res) {
    bycrypt.hash(req.body.password, 20, (err, hash) => {
      if (err) {
        res.status(500).send({
          message: 'Server returned an unexpected error, Kindly try again later',
        });
      }
      User.create({
        username: req.body.username,
        email: req.body.email,
        password: hash,
      })
        .then(user => res.status(201).send({
          message: 'user created succesfully',
          data: user,
        }))
        .catch(error => res.status(401).send({
          message: error,
        }));
    });
  },

};
