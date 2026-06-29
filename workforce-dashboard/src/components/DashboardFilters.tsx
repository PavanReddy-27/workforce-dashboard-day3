interface DashboardFiltersProps {
  department: string;
  setDepartment: (value: string) => void;

  status: string;
  setStatus: (value: string) => void;

  location: string;
  setLocation: (value: string) => void;

  resetFilters: () => void;
}

const DashboardFilters = ({
  department,
  setDepartment,
  status,
  setStatus,
  location,
  setLocation,
  resetFilters,
}: DashboardFiltersProps) => {
  return (
    <div className="filters-container">
      
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="All">All Departments</option>
        <option value="Engineering">Engineering</option>
        <option value="QA">QA</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
        <option value="Support">Support</option>
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="All">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="All">All Locations</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Chennai">Chennai</option>
        <option value="Pune">Pune</option>
      </select>

      <button onClick={resetFilters}>
        Reset Filters
      </button>
    </div>
  );
};

export default DashboardFilters;