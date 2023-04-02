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
        <h2 className="allcat-header">Blog Category</h2>
        <p className="allcat-desc">Choose your desired categories</p>
      </div>
      <div className="cat-choice-con">
        <ul className="">
          <li>
            <a href="#" className="cat-choice">
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
        <div className="cat-blog"></div>
      </div>
    </div>
  );
};
export default AllCategory;
