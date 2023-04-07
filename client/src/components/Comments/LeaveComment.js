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
        <a className="btn-comment">Post comment</a>
      </form>
      <p className="leavecom-nli">
        Login first to comment.
        <a href="link-login">Login</a>
      </p>
    </div>
  );
};
export default LeaveComment;
