import BlogSingle from "../BlogsByCat/BlogSingle";

const MyBlogs = () => {
  return (
    <div className="userblogs-con">
      <h1 className="sec-title" style={{ paddingLeft: "10rem" }}>
        Blogs
      </h1>
      <BlogSingle />
      <BlogSingle />
    </div>
  );
};
export default MyBlogs;
