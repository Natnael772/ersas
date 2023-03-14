import "./Pagination.css";

const Pagination = () => {
  return (
    <div className="pagination-main-container">
      <div className="left-arrow"></div>
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
      </ul>
      <div className="right-arrow"></div>
    </div>
  );
};
export default Pagination;
