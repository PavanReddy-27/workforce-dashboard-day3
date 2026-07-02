import { useQuery } from "@tanstack/react-query";
import { fetchDepartments } from "../api/departmentService";

export const useDepartments = () => {
  return useQuery({
    queryKey: ["departments"],
    queryFn: fetchDepartments,
  });
};