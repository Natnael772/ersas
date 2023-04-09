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
import "./AllCategory.css";
const AllCategory = () => {
  return (
    <div className="allcat-container-main">
      <div className="headers-con">
        <h2 className="allcat-header"> Category</h2>
        <p className="allcat-desc">Choose your desired categories</p>
      </div>
      <div className="cat-choice-con">
        <ul className="cat-choice-con-ul">
          <li>
            <a href="#" className="cat-choice active">
              All
            </a>
          </li>
          <li>
            <a href="#" className="cat-choice">
              Technology
            </a>
          </li>
          <li>
            <a href="#" className="cat-choice">
              Sports
            </a>
          </li>
          <li>
            <a href="#" className="cat-choice">
              Politics
            </a>
          </li>
          <li>
            <a href="#" className="cat-choice">
              Business
            </a>
          </li>
          <li>
            <a href="#" className="cat-choice">
              Education
            </a>
          </li>
          <li>
            <a href="#" className="cat-choice">
              Other
            </a>
          </li>
        </ul>
      </div>
      <div className="cat-blogs-con">
        <div className="cat-blog">
          <img src={wp5} className="cat-blog-img" />
          <p className="cat-name">
            Business <span className="cat-blog-date"> - July 2, 2020</span>
          </p>
          <h2 className="cat-blog-title">
            Your most unhappy customers are your greatest source of learning
          </h2>
          <p className="cat-blog-desc">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind here here ...
          </p>
          <div className="cat-user-con">
            <img className="cat-user-img" src={wp5} />
            <div className="cat-userinfo-con">
              <h2 className="cat-userinfo-name">
                <a href="#">Sergy Campbell</a>
              </h2>
              <p className="cat-userinfo-bio">CEO and Founder</p>
            </div>
          </div>
        </div>
        <div className="cat-blog">
          <img src={wp5} className="cat-blog-img" />
          <p className="cat-name">
            Business <span className="cat-blog-date"> - July 2, 2020</span>
          </p>
          <h2 className="cat-blog-title">
            Your most unhappy customers are your greatest source of learning
          </h2>
          <p className="cat-blog-desc">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind here here ...
          </p>
          <div className="cat-user-con">
            <img className="cat-user-img" src={wp5} />
            <div className="cat-userinfo-con">
              <h2 className="cat-userinfo-name">
                <a href="#">Sergy Campbell</a>
              </h2>
              <p className="cat-userinfo-bio">CEO and Founder</p>
            </div>
          </div>
        </div>
        <div className="cat-blog">
          <img src={wp5} className="cat-blog-img" />
          <p className="cat-name">
            Business <span className="cat-blog-date"> - July 2, 2020</span>
          </p>
          <h2 className="cat-blog-title">
            Your most unhappy customers are your greatest source of learning
          </h2>
          <p className="cat-blog-desc">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind here here ...
          </p>
          <div className="cat-user-con">
            <img className="cat-user-img" src={wp5} />
            <div className="cat-userinfo-con">
              <h2 className="cat-userinfo-name">
                <a href="#">Sergy Campbell</a>
              </h2>
              <p className="cat-userinfo-bio">CEO and Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllCategory;
