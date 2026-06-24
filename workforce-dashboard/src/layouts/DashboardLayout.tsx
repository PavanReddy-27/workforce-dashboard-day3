import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
  return (
    <>
      <Sidebar />

      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}

export default DashboardLayout;