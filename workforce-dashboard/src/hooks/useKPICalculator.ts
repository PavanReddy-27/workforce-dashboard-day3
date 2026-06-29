import { useMemo } from "react";
import type { Employee } from "../types/Employee";

const useKPICalculator = (employees: Employee[]) => {
  // Total Employees
  const totalEmployees = useMemo(() => {
    return employees.length;
  }, [employees]);

  // Active Employees
  const activeEmployees = useMemo(() => {
    return employees.filter(
      (employee) => employee.status === "Active"
    ).length;
  }, [employees]);

  // Inactive Employees
  const inactiveEmployees = useMemo(() => {
    return employees.filter(
      (employee) => employee.status === "Inactive"
    ).length;
  }, [employees]);

  // Attrition Rate
  const attritionRate = useMemo(() => {
    if (totalEmployees === 0) return "0%";

    return (
      ((inactiveEmployees / totalEmployees) * 100).toFixed(1) + "%"
    );
  }, [inactiveEmployees, totalEmployees]);

  // Hiring Rate
  // (Sample calculation based on active employees)
  const hiringRate = useMemo(() => {
    if (totalEmployees === 0) return "0%";

    return (
      ((activeEmployees / totalEmployees) * 100).toFixed(1) + "%"
    );
  }, [activeEmployees, totalEmployees]);

  // Skill Coverage
  // Static value because employee skills don't exist yet
  const skillCoverage = useMemo(() => {
    return "90%";
  }, []);

  return {
    totalEmployees,
    activeEmployees,
    inactiveEmployees,
    attritionRate,
    hiringRate,
    skillCoverage,
  };
};

export default useKPICalculator;