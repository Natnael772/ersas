import "./Login.css";
const Login = () => {
  return (
    <div className="container-main">
      <div className="container-signup">
        <h2 className="signup-title">New to our Shop?</h2>

        <p className="signup-description">
          There are advances being made in science and technology everyday, and
          a good example of this is the
        </p>
        <button className="signup-btn">Create an account</button>
      </div>
      <div className="container-login">
        <div className="login-title-container">
          <h2 className="login-title">Welcome back!</h2>
          <h2 className="login-title">Please Sign in now</h2>
        </div>
        {/* <p className="error-msg">
          Incorrent username or password. Please try again
        </p> */}
        <label for="username">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
          />
        </label>
        {/* <input type="checkbox" name="remember" /> Remember me */}
        <button className="login-btn">Log in</button>
        <a href="#" className="forgot-pwd">
          Forgot password?
        </a>
      </div>
    </div>
  );
};
export default Login;
