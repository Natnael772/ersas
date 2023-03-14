import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";
import BlogsByCat from "./components/BlogsByCat/BlogsByCat";
import NavT from "./NavT";

function App() {
  return (
    <div>
      <Nav />
      <Landing />
      <BlogsByCat />
      {/* <NavT /> */}
    </div>
  );
}

export default App;
