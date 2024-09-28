import React from "react";
import EmployeeCard from "./EmployeeCard";
import "./EmployeeList.css";

function EmployeeList({ employees, onEditClick }) {
  return (
    <div>
      <h1 className="dashboard-heading">Employee Dashboard</h1>
      <div className="employee-list">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onEditClick={onEditClick}
          />
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
