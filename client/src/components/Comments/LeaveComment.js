import "./Comments.css";
const LeaveComment = () => {
  return (
    <div className="leavecom-main-container">
      <h3 className="leavecom-header">Leave a comment</h3>
      <form className="leavecom-form">
        {/* <label htmlFor="comment">Comment</label> */}
        <textarea
          id="comment"
          name="comment"
          className="comm-input"
          placeholder="Comment..."
        />
        <button className="btn-comment">Post comment</button>
      </form>
      <p className="leavecom-logf">
        Login first to comment. &nbsp;
        <a className="link-login">Click here</a>
      </p>
    </div>
  );
};
export default LeaveComment;
