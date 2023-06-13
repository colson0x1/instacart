const express = require('express');

const { handleErrors } = require('./middlewares');
const usersRepo = require('../../repositories/users');
const signupTemplate = require('../../views/admin/auth/signup');
const loginTemplate = require('../../views/admin/auth/login');
const {
  requireEmail,
  requirePassword,
  requirePasswordConfirmation,
  requireEmailExists,
  requireValidPasswordForUser,
} = require('./validators');

const router = express.Router();

router.get('/signup', (req, res) => {
  res.send(signupTemplate({ req }));
});

router.post(
  '/signup',
  [requireEmail, requirePassword, requirePasswordConfirmation],
  handleErrors(signupTemplate),
  async (req, res) => {
    const { email, password } = req.body;
    const user = await usersRepo.create({ email, password });

    req.session.userId = user.id;

    res.send('Account created!!');
  }
);

router.get('/signout', (req, res) => {
  req.session = null;
  res.send("You're logged out.");
});

router.get('/login', (req, res) => {
  res.send(loginTemplate({}));
});

router.post(
  '/login',
  [requireEmailExists, requireValidPasswordForUser],
  handleErrors(loginTemplate),
  async (req, res) => {
    const { email } = req.body;

    const user = await usersRepo.getOneBy({ email });

    req.session.userId = user.id;

    res.send("You're signed in!!!");
  }
);

module.exports = router;
