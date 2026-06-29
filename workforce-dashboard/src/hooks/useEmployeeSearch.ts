import { useEffect, useState } from "react";
import type { Employee } from "../types/Employee";

const useEmployeeSearch = (employees: Employee[]) => {
  const [search, setSearch] = useState("");
  const [filteredEmployees, setFilteredEmployees] =
    useState<Employee[]>(employees);

  useEffect(() => {
    const result = employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(search.toLowerCase()) ||
        employee.id.toString().includes(search)
    );

    setFilteredEmployees(result);
  }, [search, employees]);

  return {
    search,
    setSearch,
    filteredEmployees,
  };
};

export default useEmployeeSearch;