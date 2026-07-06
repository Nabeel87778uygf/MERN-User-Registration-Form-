import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Website Layout
import Layout from "./components/Layout";

// Authentication
import Login from "./Auth/Login";
import Register from "./Auth/Register";

// Website Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";
import DoctorsPage from "./pages/DoctorsPage";
import Appointment from "./pages/Appointnment";
import Profile from "./pages/Profile";

// Admin Page
import AdminLayout from "./Layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Patients from "./pages/admin/Patients";
import Doctors from "./pages/admin/Doctors";
import Appointments from "./pages/admin/Appointments";
import Departments from "./pages/admin/Departments";
import Pharmacy from "./pages/admin/Pharmacy";
import Billing from "./pages/admin/Billing";
import Reports from "./pages/admin/Reports";
import Settings from "./pages/admin/Settings";

// Route Protection
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Default */}

        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Authentication */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Website */}
        <Route element={<ProtectedRoute allowedRoles={["user", "admin"]} />}>
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Route>

        {/* Admin */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/patients" element={<Patients />} />
            <Route path="/admin/doctors" element={<Doctors />} />
            <Route path="/admin/appointments" element={<Appointments />} />
            <Route path="/admin/departments" element={<Departments />} />
            <Route path="/admin/pharmacy" element={<Pharmacy />} />
            <Route path="/admin/billing" element={<Billing />} />
            <Route path="/admin/reports" element={<Reports />} />
            <Route path="/admin/settings" element={<Settings />} />
          </Route>
        </Route>

        {/* 404 */}

        <Route path="*" element={<Navigate to="/login" replace />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;