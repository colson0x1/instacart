const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(
    `
    <div>
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

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Account created!!');
});

app.listen(3000, () => {
  console.log('Listening at port 3000...');
});
