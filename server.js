const express = require('express');
const bodyParser = require('body-parser');
const usersRepo = require('./repositories/users');
const cookieSession = require('cookie-session');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
  keys: ['wokdowamdkwqokdw8924jkawdkalsqlp']
}))

app.get('/', (req, res) => {
  res.send(
    `
    <div>
    Your id is: ${req.session.userId}
      <form method="POST">
        <input name="email" type="email" placeholder='Type your email' />
        <input name="password" type='password' placeholder='Create a new password' />
        <input name="passwordConfirmation" type='password' placeholder='Confirm your password' />
        <button>Sign Up</button>
      </form>
    </div>
    `
  );
});

app.post('/', async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;

  const existingUser = await usersRepo.getOneBy({ email });
  if (existingUser) {
    return res.send('Email already in use.');
  }

  if (password !== passwordConfirmation) {
    return res.send('Passwords must match');
  }

  const user = await usersRepo.create({ email, password });

  req.session.userId = user.id;

  res.send('Account created!!');
});

app.listen(3000, () => {
  console.log('Listening at port 3000...');
});
