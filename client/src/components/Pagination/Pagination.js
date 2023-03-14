import "./Pagination.css";
import { AiOutlineLeft } from "react-icons/ai";
import { RxCaretLeft } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";

const Pagination = () => {
  return (
    <div className="pagination-main-container">
      <div className="arrow-container">
        <RxCaretLeft className="left-arrow" />
      </div>
      <ul className="page-numbers">
        <li>
          <a href="#" className="page-number active">
            1
          </a>
        </li>
        <li>
          <a href="#" className="page-number">
            2
          </a>
        </li>
        <li>
          <a href="#" className="page-number">
            3
          </a>
        </li>
        <li>
          <a href="#" className="page-number">
            4
          </a>
        </li>
        <li>
          <a href="#" className="page-number">
            5
          </a>
        </li>
      </ul>
      <div className="arrow-container">
        <RxCaretRight className="left-arrow" />
      </div>
    </div>
  );
};
export default Pagination;
