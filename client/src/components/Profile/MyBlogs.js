import MyBlog from "./MyBlog";
const MyBlogs = () => {
  return (
    <div className="userblogs-con">
      <h1 className="sec-title" style={{ paddingLeft: "10rem" }}>
        Blogs
      </h1>
      <MyBlog />
      <MyBlog />
    </div>
  );
};
export default MyBlogs;
