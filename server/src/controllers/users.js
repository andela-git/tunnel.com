/**
 * @author Wale Ayandiran
 * Users controller to manage users account and interaction
 * with the application.
 */

import Sequelize from 'sequelize';
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import models from '../../models';

const { Op } = Sequelize;

let token;

module.exports = {
  /**
   * Creates a new user and assign jwt token on registration
   * @param {*} req
   * @param {*} res
   */
  create(req, res) {
    const { username, email, password } = req.body;
    models.User.find({
      where: {
        [Op.or]: [{ email }, { username }],
      },
    })
      .then((user) => {
        console.log(user);
        if (!user) {
          bycrypt.hash(password, 20, (err, hash) => {
            if (err) {
              res.status(500).send({
                message: 'Server returned an unexpected error, Kindly try again later',
              });
            }
            models.User.create({
              username: req.body.username,
              email: req.body.email,
              password: hash,
            },
            token = jwt.sign({ id: res.id }, process.env.SECRET, {
              expiresIn: 86400, // 24 hours
            }))
              .then(
                () => res.status(201).send({
                  message: 'user created succesfully',
                  data: user,
                  auth: true,
                })
              )
              .catch(error => res.status(401).send({
                message: error,
              }));
          });
        } else {
          res.status(409).send({
            success: false,
            message: 'Email or Username already exists.',
          });
        }
      });
  },

  /**
   * Logins a registered user and assign jwt
   * @param req
   * @param res
   * @param next
   */
  login(req, res, next) {
    const { email, password } = req.body;
    models.User.findOne({
      where: {
        [Op.or]: [{ email }, { username: email }],
      },
    })
      .then((userExists) => {
        if (userExists) {
          bycrypt.compare(password, userExists.password, (err, result) => {
            if (err) {
              return next(err);
            }
            if (!result) {
              return res.status(401).send({
                success: false,
                errors: {
                  body: ['Authentication failed'],
                },
              });
            }
            // Login succesful
            token = jwt.sign({ id: userExists.id }, process.env.SECRET, {
              expiresIn: 86400, // 24 hours
            });
            res.status(200).send({
              auth: true,
              token,
            });
          });
        } else {
          res.status(401).send({
            success: false,
            errors: {
              body: ['Authentication failed'],
            },
          });
        }
      }).catch(next);
  },

  getToken(req, res) {
    const demoToken = jwt.sign({ id: 1 }, process.env.SECRET);
    res.send({ demoToken });
  },

};
