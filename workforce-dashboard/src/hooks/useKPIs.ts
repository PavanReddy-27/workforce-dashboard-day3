import { useQuery } from "@tanstack/react-query";
import { fetchKPIs } from "../api/kpiService";

export const useKPIs = () => {
  return useQuery({
    queryKey: ["kpis"],
    queryFn: fetchKPIs,
  });
};