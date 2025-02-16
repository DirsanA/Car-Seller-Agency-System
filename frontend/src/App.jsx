import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default App;
