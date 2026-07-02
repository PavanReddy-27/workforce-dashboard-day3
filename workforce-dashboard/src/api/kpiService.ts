import {kpis} from "../data/kpis";
import type { WorkforceKPI } from "../types/WorkforceKPI";

export const fetchKPIs = async (): Promise<WorkforceKPI[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(kpis);
    }, 500);
  });
};