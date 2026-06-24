import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Workforce from "../pages/Workforce";
import Skills from "../pages/Skills";
import Reports from "../pages/Reports";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/workforce" element={<Workforce />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;