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
import BlogSingle from "./BlogSingle";
const BlogsByCat = () => {
  return (
    <div>
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
            <div className="user-data-subcontainer">
              <h2 className="user-fullname">Natnael Deyas</h2>
              <h2 className="user-bio">Fullstack Developer based in Eth</h2>
            </div>
          </div>
          <h2 className="date-posted">Posted at 11/13/2019</h2>
        </div>
      </div>

      <div className="blogsbycat-main-container">
        {/* <div className="img-blogbycat-container"> */}
        <img src={wp4} className="img-blogbycat" />
        {/* </div> */}
        <div className="blog-description-container">
          <h2 className="blog-category">
            <a href="#">Business</a>
          </h2>
          <h2 className="blog-title">
            <a href="#">
              Build a website in minutes with Adobe Templates for free
            </a>
          </h2>
          <div className="user-data-container">
            <img className="user-photo" src={wp9} />
            <div className="user-data-subcontainer">
              <h2 className="user-fullname">Natnael Getachew</h2>
              <h2 className="user-bio">
                Sofftware engineer specialized on Laravel framework
              </h2>
            </div>
          </div>
          <h2 className="date-posted">Posted at 11/13/2019</h2>
        </div>
      </div>
      <div className="blogsbycat-main-container">
        {/* <div className="img-blogbycat-container"> */}
        <img src={wp10} className="img-blogbycat" />
        {/* </div> */}
        <div className="blog-description-container">
          <h2 className="blog-category">
            <a href="#">Sport</a>
          </h2>
          <h2 className="blog-title">
            <a href="#">
              Build a website in minutes with Adobe Templates for free
            </a>
          </h2>
          <div className="user-data-container">
            <img className="user-photo" src={wp1} />
            <div className="user-data-subcontainer">
              <h2 className="user-fullname">Natnael Fekadu</h2>
              <h2 className="user-bio">Fullstack engineer | MERN Stack</h2>
            </div>
          </div>
          <h2 className="date-posted">Posted at 11/13/2019</h2>
        </div>
      </div>
      <BlogSingle />
    </div>
  );
};
export default BlogsByCat;
