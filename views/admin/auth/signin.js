const layout = require('../layout');

module.exports = () => {
  return layout({
    content: `
        <div>
        <form method="POST">
            <input name="email" type="email" placeholder='Type your email' />
            <input name="password" type='password' placeholder='Type your password' />
            <button>Sign In</button>
            </form>
        </div> 
    `,
  });
};