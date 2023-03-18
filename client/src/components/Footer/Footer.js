import {
  wp1,
  wp2,
  wp3,
  wp4,
  wp5,
  wp6,
  wp7,
  wp8,
  wp9,
  wp10,
  wp11,
  wp12,
} from "../../constants/images";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-intro">
        <h2 className="footer-logo">
          Ers<span className="spanned">as</span>.
        </h2>
        <p className="desc">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className="footer-latest">
        <h2 className="footer-title">latest News</h2>
        <div className="cards-container">
          <img className="footer-img" src={wp9} />
          <div className="desc-container">
            <h2 className="footer-blog-title">
              <a href="#" className="footer-blog-link">
                Even all the powerful pointing has no control about
              </a>
            </h2>
            <h3 className="footer-blog-date">Oct 16, 2019 . Admin</h3>
          </div>
        </div>
        <div className="cards-container">
          <img className="footer-img" src={wp9} />
          <div className="desc-container">
            <h2 className="footer-blog-title">
              <a href="#" className="footer-blog-link">
                Even all the powerful pointing has no control about
              </a>
            </h2>
            <h3 className="footer-blog-date">Oct 16, 2019 . Admin</h3>
          </div>
        </div>
      </div>
      <div className="footer-information">
        <h2 className="footer-title">Information</h2>
        <div className="infos-container">
          <ul className="info-links">
            <li>
              <a href="#" className="info-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="info-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="info-link">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="info-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-questions">
        <h2 className="footer-title">Have any questions?</h2>
        <div className="contact-infos">
          <div className="contact-info-con">
            <h2 className="contact-info">Bole, Addis Ababa, Ethiopia</h2>
          </div>
          <div className="contact-info-con">
            <h2 className="contact-info">+251 932 576 834</h2>
          </div>
          <div className="contact-info-con">
            <h2 className="contact-info">info@mydomain.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
