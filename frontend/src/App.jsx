import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Login from "./Login";
import CallSellingCard from "./CallSellingCard"; // Import the missing component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/call-seller-card" element={<CallSellingCard />} />{" "}
        {/* Add this route */}
      </Routes>
    </Router>
  );
};

export default App;
