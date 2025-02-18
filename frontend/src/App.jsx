import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Login from "./Login";
import AddCar from "./AddCar";
import CarAdmin from "./CarAdmin";
import ClientView from "./ClientView"; // Ensure ClientView is imported
import Service from "./Service";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/call-seller-card" element={<CarAdmin />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/clients" element={<ClientView />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </Router>
  );
};

export default App;
