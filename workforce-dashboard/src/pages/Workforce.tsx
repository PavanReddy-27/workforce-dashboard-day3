import { useCallback } from "react";

import KPICard from "../components/KPICard";
import SearchBar from "../components/SearchBar";
import DashboardFilters from "../components/DashboardFilters";
import EmployeeTable from "../components/EmployeeTable";
import DepartmentCard from "../components/DepartmentCard";

import { useEmployees } from "../hooks/useEmployees";
import { useDepartments } from "../hooks/useDepartments";

import useEmployeeSearch from "../hooks/useEmployeeSearch";
import useDashboardFilters from "../hooks/useDashboardFilters";
import useKPICalculator from "../hooks/useKPICalculator";
import usePagination from "../hooks/usePagination";

const Workforce = () => {
  const { data: employees = [], isLoading, isError } = useEmployees();

const { data: departments = [] } = useDepartments();

  const {
    search,
    setSearch,
    filteredEmployees: searchedEmployees,
  } = useEmployeeSearch(employees);

  const {
    department,
    setDepartment,
    status,
    setStatus,
    location,
    setLocation,
    filteredEmployees,
    resetFilters,
  } = useDashboardFilters(searchedEmployees);

  const {
    totalEmployees,
    activeEmployees,
    inactiveEmployees,
  } = useKPICalculator(filteredEmployees);

  const {
    currentItems,
    currentPage,
    totalPages,
    nextPage,
    previousPage,
  } = usePagination(filteredEmployees, 5);

  // const refreshDashboard = useCallback(() => {
  //   window.location.reload();
  // }, []);

  const handleSearch = useCallback(
    (value: string) => {
      setSearch(value);
    },
    [setSearch]
  );

  const handleReset = useCallback(() => {
    resetFilters();
    setSearch("");
  }, [resetFilters, setSearch]);

    if (isLoading) return <h2>Loading...</h2>;

if (isError) return <h2>Error loading employees.</h2>;

  return (
    
    <div className="workforce-page">
      <h1 className="page-title">Workforce Dashboard</h1>

      <div className="search-filter-bar">

  <SearchBar
    search={search}
    setSearch={handleSearch}
  />

  <DashboardFilters
     departments={departments.map((d) => d.name)}
    department={department}
    setDepartment={setDepartment}
    status={status}
    setStatus={setStatus}
    location={location}
    setLocation={setLocation}
    resetFilters={handleReset}
  />

</div>
{/* 
      <div className="button-group">
  <button onClick={refreshDashboard}>Refresh Dashboard</button>
  <button onClick={handleReset}>Reset Filters</button>
</div> */}

      <h2 className="section-title">KPIs</h2>

      <div className="kpi-grid">
  <KPICard title="Total Employees" value={totalEmployees} />
  <KPICard title="Active Employees" value={activeEmployees} />
  <KPICard title="Inactive Employees" value={inactiveEmployees} />
</div>

      <h2>Employees</h2>

      <EmployeeTable employees={currentItems} />

      <div className="pagination">
        <button onClick={previousPage}>Previous</button>

        <span>
          {" "}
          Page {currentPage} of {totalPages}{" "}
        </span>

        <button onClick={nextPage}>Next</button>
      </div>

      <h2 className="section-title">Department Summary</h2>
<div className="department-grid">
  {departments.map((department) => (
    <DepartmentCard
      key={department.id}
      department={department}
    />
  ))}
</div>
    </div>
  );

};

export default Workforce;