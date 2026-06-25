import { employees } from "../data/employees";
import { departments } from "../data/departments";

const EmployeeTable = () => {
  return (
    <div className="table-container">
      <h2>Employee Table</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Experience</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>{employee.designation}</td>
              <td>{employee.experience} Years</td>
              <td>{employee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface DepartmentCardProps {
  name: string;
  totalEmployees: number;
}

const DepartmentCard = ({
  name,
  totalEmployees,
}: DepartmentCardProps) => {
  return (
    <div className="department-card">
      <h3>{name}</h3>
      <p>{totalEmployees} Employees</p>
    </div>
  );
};

const Workforce = () => {
  const activeEmployees = employees.filter(
    (employee) => employee.status === "Active"
  ).length;

  const inactiveEmployees = employees.filter(
    (employee) => employee.status === "Inactive"
  ).length;

  return (
    <div className="dashboard">
      <h1 className="page-title">
        Workforce Management
      </h1>

      <div className="kpi-grid">
        <div className="kpi-card">
          <h4>Total Employees</h4>
          <h2>{employees.length}</h2>
        </div>

        <div className="kpi-card">
          <h4>Active Employees</h4>
          <h2>{activeEmployees}</h2>
        </div>

        <div className="kpi-card">
          <h4>Inactive Employees</h4>
          <h2>{inactiveEmployees}</h2>
        </div>
      </div>

      <EmployeeTable />

      <div>
        <h2 className="section-title">
          Department Summary
        </h2>

        <div className="department-grid">
          {departments.map((department) => (
            <DepartmentCard
              key={department.id}
              name={department.name}
              totalEmployees={
                department.totalEmployees
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workforce;