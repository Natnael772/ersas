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
import "./BlogDetail.css";
const BlogDetail = () => {
  return (
    <div className="main-container">
      <div className="container-top">
        <div className="user-container-small">
          <div className="user-con-small">
            <img className="user-img-small" src={wp1} />
            <div className="user-desc-small">
              <h2 className="username-small">Natnael Deyas</h2>
              <p className="infos-small">
                Jan 20 <span className="dot">.</span> 13min read
              </p>
            </div>
            <button className="btn-follow-small">Follow</button>
          </div>
        </div>
        <div className="links-container-small"></div>
      </div>
    </div>
  );
};
export default BlogDetail;
