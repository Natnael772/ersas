import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";
import BlogsByCat from "./components/BlogsByCat/BlogsByCat";
import Pagination from "./components/Pagination/Pagination";
import NavT from "./NavT";

function App() {
  return (
    <div>
      {/* <Nav /> */}
      {/* <Landing /> */}
      <BlogsByCat />
      <Pagination />
      {/* <NavT /> */}
    </div>
  );
}

export default App;
