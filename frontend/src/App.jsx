import { BrowserRouter, Link, Router, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import Landing from "./components/Landing.jsx";
import Navbar from "./components/NavBar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Routes> */}
      <Landing />
      {/* </Routes> */}
    </BrowserRouter>
  );
}

export default App;
