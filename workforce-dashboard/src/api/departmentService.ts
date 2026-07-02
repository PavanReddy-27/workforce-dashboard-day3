import {departments} from "../data/departments";
import type{ Department } from "../types/Department";

export const fetchDepartments = async (): Promise<Department[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(departments);
    }, 500);
  });
};