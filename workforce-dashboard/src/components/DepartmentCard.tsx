import type { Department } from "../types/Department";

interface DepartmentCardProps {
  department: Department;
}

const DepartmentCard = ({ department }: DepartmentCardProps) => {
  return (
    <div className="department-card">
      
      <h3>{department.name}</h3>

      <p>
        <strong>Total Employees:</strong>{" "}
        {department.totalEmployees}
      </p>
    </div>
  );
};

export default DepartmentCard;