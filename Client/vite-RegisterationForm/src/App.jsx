import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout
import Layout from "./components/Layout";

// Auth Pages
import Login from "./Auth/Login";
import Register from "./Auth/Register";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";
import DoctorsPage from "./pages/DoctorsPage";
import Appointment from "./pages/Appointnment";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Website Routes */}
        <Route element={<Layout />}>

          <Route path="/home" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<ServicesPage />} />

          <Route path="/doctors" element={<DoctorsPage />} />

          <Route path="/appointment" element={<Appointment />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/contact" element={<Contact />} />

        </Route>

        {/* Invalid Route */}
        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;