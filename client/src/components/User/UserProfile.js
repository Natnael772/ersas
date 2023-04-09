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
  beard,
  beard2,
} from "../../constants/images";
import UserBlog from "./UserBlog";
import UserBlogs from "./UserBlogs";
const UserProfile = () => {
  return (
    <>
      <div className="main-container">
        <div className="user-container">
          <div className="img-container">
            <img className="user-img-large" src={beard2} />
          </div>
          <div className="user-data-con">
            <h2 className="user-title-b">Natnael Deyas</h2>
            <p className="user-bio-b">Fullstack developer based in Ethiopia</p>
            <div className="follow-con">
              <a href="#" className="follow-num">
                251K followers
              </a>{" "}
              ,
              <a href="#" className="follow-num">
                225k following
              </a>
            </div>
            <a href="#" className="btn-follow">
              Follow
            </a>
          </div>
        </div>
      </div>
      <UserBlogs />
    </>
  );
};
export default UserProfile;
