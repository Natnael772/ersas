import "./Login.css";
const Signup = () => {
  return (
    <div className="container-main">
      <div className="container-column1">
        <h2 className="column1-title">Have an account?</h2>

        <p className="column1-description">
          Login here by clicking the button below and continue your blogging and
          content writing journey.
        </p>
        <a href="#" className="column1-btn">
          Login
        </a>
      </div>
      <div className="container-column2">
        <div className="column2-title-container">
          <h2 className="column2-title">Welcome dear user!</h2>
          <h2 className="column2-title">Please Sign up by filling the form.</h2>
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
        <label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            className="input"
          />
        </label>
        {/* <input type="checkbox" name="remember" /> Remember me */}
        <a href="#" className="column2-btn">
          Signup
        </a>
        {/* <a href="#" className="forgot-pwd">
          Any issues?
        </a> */}
      </div>
    </div>
  );
};
export default Signup;
