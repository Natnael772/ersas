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
import "./MyBlogs.css";
const MyBlog = () => {
  return (
    <div className="blogsbycat-main-container">
      {/* <div className="img-blogbycat-container"> */}
      <img src={wp6} className="img-blogbycat" />
      {/* </div> */}
      <div className="blog-description-container">
        <h2 className="blog-category">
          <a href="#">Application</a>
        </h2>
        <h2 className="blog-title">
          <a href="#">How to learn MERN Stack development from Scratch</a>
        </h2>
        {/* <div className="user-data-container">
          <img className="user-photo" src={wp1} />
          <div className="user-data-subcontainer">
            <h2 className="user-fullname">Segni Alemayehu</h2>
            <h2 className="user-bio">
              Senior Laravel Developer based in Ethiopia
            </h2>
          </div>
        </div> */}
        <h2 className="date-posted">Posted at 11/13/2019</h2>
        <div className="blog-btns-con">
          <a href="#" className="btn-edit">
            Edit
          </a>
          <a href="#" className="btn-delete">
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};
export default MyBlog;
