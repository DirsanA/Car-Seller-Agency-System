import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Login from "./Login";
import CarAdmin from "./CarAdminPanel";
import AddCar from "./AddCar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/call-seller-card" element={<CarAdmin />} />{" "}
        <Route path="/add-car" element={<AddCar />} />
      </Routes>
    </Router>
  );
};

export default App;
