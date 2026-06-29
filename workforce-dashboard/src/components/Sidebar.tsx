import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <header className="navbar">
      <div className="logo">
        <h2>WAP</h2>
      </div>

      <nav className="nav-links">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/workforce">Workforce</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/reports">Reports</NavLink>
       
      </nav>
    </header>
  );
}

export default Sidebar;