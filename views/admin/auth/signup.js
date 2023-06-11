const layout = require('../layout');

const getError = (errors, prop) => {
  // prop === 'email' || 'password' || 'passwordConfirmation'
  try {
    if (errors) {
      return errors.mapped()[prop].msg;
    }
  } catch {
    return '';
  }
};

module.exports = ({ req, errors }) => {
  return layout({
    content: `
        <div>
        Your id is: ${req.session.userId}
            <form method="POST">
            <input name="email" type="text" placeholder='Type your email' />
            ${getError(errors, 'email')}
            <input name="password" type='password' placeholder='Create a new password' />
            ${getError(errors, 'password')}
            <input name="passwordConfirmation" type='password' placeholder='Confirm your password' />
            ${getError(errors, 'passwordConfirmation')}
            <button>Sign Up</button>
            </form>
        </div>
    `,
  });
};
