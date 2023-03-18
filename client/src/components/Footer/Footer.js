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
        <h2 className="footer-title">Latest Blog</h2>
        <div className="cards-container">
          <img className="footer-img" src={wp1} />
          <div className="desc-container">
            <h2 className="footer-blog-title">
              Even all the powerful pointing has no control about
            </h2>
            <h3 className="footer-blog-date">Oct16,2019</h3>
          </div>
        </div>
      </div>
      <div className="footer-information">
        <h2 className="footer-title">Information</h2>
      </div>
      <div className="footer-questions">
        <h2 className="footer-title">Have any questions?</h2>
      </div>
    </div>
  );
};
export default Footer;
