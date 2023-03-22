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
                Jan 20 <span className="dot">,</span> 13min read
              </p>
            </div>
            <button className="btn-follow-small">Follow</button>
          </div>
        </div>
        <div className="links-container-small"></div>
      </div>
      <div className="blog-detail-container">
        <div className="blog-detail">
          <h1 className="blog-t">
            Building a startup from Scratch: My mistake as CTO
          </h1>
          <p className="blog-p">
            When I was first approached to help build the technical side of a
            new startup, I had yet to learn what I was getting into. I was
            invited by a friend to audit the solution that the previous
            technical lead and developer had started. Still, due to unforeseen
            circumstances, both of them decided to leave the project. I was left
            with a barely started product and no team to continue the work.
          </p>
          <p className="blog-p">
            When I was first approached to help build the technical side of a
            new startup, I had yet to learn what I was getting into. I was
            invited by a friend to audit the solution that the previous
            technical lead and developer had started. Still, due to unforeseen
            circumstances, both of them decided to leave the project. I was left
            with a barely started product and no team to continue the work.
          </p>
        </div>
        <div className="sidebars-container">
          <div className="userbox-con">
            <img className="user-img-medium" src={wp2} />
            <h2 className="username-medium">Natnael Deyas</h2>
            <h3 className="followers-medium">297K followers</h3>
            <h3 className="bios-medium">
              Self-taught fullstack developer based in Ethipia
            </h3>
            <button className="btn-follow-big">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogDetail;
