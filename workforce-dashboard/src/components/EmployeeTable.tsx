import type { Employee } from "../types/Employee";

interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable = ({ employees }: EmployeeTableProps) => {
  return (
    <table className="employee-table">
      
      <thead>
        <tr style={{ background: "#2563eb" }}>
          <th style={styles.th}>ID</th>
          <th style={styles.th}>Name</th>
          <th style={styles.th}>Department</th>
          <th style={styles.th}>Designation</th>
          <th style={styles.th}>Experience</th>
          <th style={styles.th}>Location</th>
          <th style={styles.th}>Status</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td style={styles.td}>{employee.id}</td>
            <td style={styles.td}>{employee.name}</td>
            <td style={styles.td}>{employee.department}</td>
            <td style={styles.td}>{employee.designation}</td>
            <td style={styles.td}>{employee.experience} Years</td>
            <td style={styles.td}>{employee.location}</td>
            <td style={styles.td}>{employee.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  th: {
    border: "1px solid #1c1111",
    padding: "10px",
    textAlign: "left" as const,
  },

  td: {
    border: "1px solid #ddd",
    padding: "10px",
  },
};

export default EmployeeTable;