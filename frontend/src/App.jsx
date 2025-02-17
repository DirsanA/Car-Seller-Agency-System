import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import "./index.css";
import Hero from "./Hero";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero></Hero>
    </Router>
  );
};

export default App;
