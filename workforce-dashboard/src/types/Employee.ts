export interface Employee {
  id: number;
  name: string;
  department: string;
  designation: string;
  experience: number;
  status: "Active" | "Inactive";
}