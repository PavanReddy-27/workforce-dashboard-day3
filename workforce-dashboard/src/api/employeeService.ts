import { employees } from "../data/employees";
import type { Employee } from "../types/Employee";

export const fetchEmployees = async (): Promise<Employee[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(employees);
    }, 500);
  });
};