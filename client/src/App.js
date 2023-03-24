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

function App() {
  return (
    <div>
      <Nav />
      {/* <Landing /> */}
      {/* <BlogsByCat /> */}
      {/* <Pagination /> */}
      {/* <BlogDetail /> */}
      <User />
      {/* <Footer /> */}

      {/* <NavT /> */}
    </div>
  );
}

export default App;
