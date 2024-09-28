import React from "react";
import "./EmployeeCard.css";
function EmployeeCard({ employee, onEditClick }) {
  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p>Email: {employee.email}</p>
      <p>Role: {employee.body}</p>
      <button onClick={() => onEditClick(employee)}>Edit</button>
    </div>
  );
}

export default EmployeeCard;
