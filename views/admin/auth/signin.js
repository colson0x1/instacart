const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ errors }) => {
  return layout({
    content: `
        <div>
        <form method="POST">
            <input name="email" type="email" placeholder='Type your email' />
            ${getError(errors, 'email')}
            <input name="password" type='password' placeholder='Type your password' />
            ${getError(errors, 'password')}
            <button>Sign In</button>
            </form>
        </div> 
    `,
  });
};
