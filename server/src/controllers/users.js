/**
 * @author Wale Ayandiran
 * Users controller to manage users account and interaction
 * with the application.
 */

import Sequelize from 'sequelize';
import bycrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../../models';


const { Op } = Sequelize.Op;
let token = '';
module.exports = {
  create(req, res) {
    const userExists = User.findOne({
      where: { email: req.body.email },
    });
    if (userExists) {
      res.status(402).send({
        message: 'User with that email already exists',
      });
    }
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
      },
      token = jwt.sign({ id: res.id }, process.env.SECRET, {
        expiresIn: 86400, // 24 hours
      }))
        .then(
          user => res.status(201).send({
            message: 'user created succesfully',
            data: user,
            auth: true,
            token,
          }))
        .catch(error => res.status(401).send({
          message: error,
        }));
    });
  },

};
