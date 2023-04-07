import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";
import BlogsByCat from "./components/BlogsByCat/BlogsByCat";
import Pagination from "./components/Pagination/Pagination";
import NavT from "./NavT";
import Footer from "./components/Footer/Footer";
import BlogDetail from "./components/BlogDetail/BlogDetail";
import User from "./components/User/User";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import AllCategory from "./components/AllCategory/AllCatagory";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <div>
      {/* <Nav />
      <Login />
      <Signup />

      <Landing />
      <BlogsByCat />
      <Pagination /> */}
      <BlogDetail />
      <Comments />
      {/* <User />
      <AllCategory /> */}
      {/* <Footer /> */}

      {/* <NavT /> */}
    </div>
  );
}

export default App;
