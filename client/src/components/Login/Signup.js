import "./Login.css";
const Signup = () => {
  return (
    <div className="container-main">
      <div className="container-column1">
        <h2 className="column1-title">New to our website?</h2>

        <p className="column1-description">
          This is a website where you can write and read blogs and various
          contents based on your preference.
        </p>
        <a href="#" className="column1-btn">
          Create an account
        </a>
      </div>
      <div className="container-column2">
        <div className="column2-title-container">
          <h2 className="column2-title">Welcome back!</h2>
          <h2 className="column2-title">Please Sign in now</h2>
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
        <a href="#" className="column2-btn">
          Log in
        </a>
        <a href="#" className="forgot-pwd">
          Forgot password?
        </a>
      </div>
    </div>
  );
};
export default Signup;
