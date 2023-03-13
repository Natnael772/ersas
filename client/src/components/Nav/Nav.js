import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav-main-container">
      <h2 className="nav-logo">Ersas</h2>
      <ul className="nav-menus-container">
        <li>
          <a href="#" className="nav-links">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Blogs
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            About
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Contact
          </a>
        </li>
      </ul>
      <ul className="nav-buttons-container">
        <button className="btn-login">Log In</button>
        <button className="btn-signup">Get started</button>
      </ul>
    </div>
  );
};
export default Nav;
