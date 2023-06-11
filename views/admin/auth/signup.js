const layout = require('../layout');

module.exports = ({ req }) => {
  return layout({
    content: `
        <div>
        Your id is: ${req.session.userId}
            <form method="POST">
            <input name="email" type="email" placeholder='Type your email' />
            <input name="password" type='password' placeholder='Create a new password' />
            <input name="passwordConfirmation" type='password' placeholder='Confirm your password' />
            <button>Sign Up</button>
            </form>
        </div>
    `,
  });
};
