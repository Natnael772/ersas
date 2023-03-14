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
import "./BlogsByCat.css";
const BlogsByCat = () => {
  return (
    <div className="blogsbycat-main-container">
      {/* <div className="img-blogbycat-container"> */}
      <img src={wp6} className="img-blogbycat" />
      {/* </div> */}
      <div className="blog-description-container">
        <h2 className="blog-category">
          <a href="#">Illustration</a>
        </h2>
        <h2 className="blog-title">
          <a href="#">
            Build a website in minutes with Adobe Templates for free
          </a>
        </h2>
        <div className="user-data-container">
          <img className="user-photo" src={wp1} />
          <h2 className="user-fullname">Natnael Deyas</h2>
        </div>
        <h2 className="date-posted">11/13/2019</h2>
      </div>
    </div>
  );
};
export default BlogsByCat;
