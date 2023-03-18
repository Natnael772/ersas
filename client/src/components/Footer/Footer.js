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
