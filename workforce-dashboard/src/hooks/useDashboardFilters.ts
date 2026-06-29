import { useMemo, useState } from "react";
import type { Employee } from "../types/Employee";

const useDashboardFilters = (employees: Employee[]) => {
  const [department, setDepartment] = useState("All");
  const [status, setStatus] = useState("All");
  const [location, setLocation] = useState("All");

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const departmentMatch =
        department === "All" || employee.department === department;

      const statusMatch =
        status === "All" || employee.status === status;

      // Works even if location doesn't exist yet
      const locationMatch =
        location === "All" || employee.location === location;

      return departmentMatch && statusMatch && locationMatch;
    });
  }, [employees, department, status, location]);

  const resetFilters = () => {
    setDepartment("All");
    setStatus("All");
    setLocation("All");
  };

  return {
    department,
    setDepartment,

    status,
    setStatus,

    location,
    setLocation,

    filteredEmployees,

    resetFilters,
  };
};

export default useDashboardFilters;