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
import "./Comments.css";
const Comments = () => {
  return (
    <>
      <div className="comments-main-container">
        <h2 className="comment-no">6 Comments</h2>
        <div className="comment-cards-con">
          <div className="comment-card">
            <img className="comment-img" src={wp1} />
            <div className="comment-desc-con">
              <h2>
                <a className="comment-user">Natnael Deyas</a>
              </h2>
              <h3 className="comment-date">November 13, 2019 at 2:00AM</h3>
              <p className="comment-comm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur quidem laborum necessitatibus, ipsam impedit vitae
                autem, eum officia, fugiat saepe enim sapiente iste iure! Quam
                voluptas earum impedit necessitatibus, nihil?
              </p>
              <a className="btn-reply">Reply</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Comments;
