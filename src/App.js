import React, { useState, useEffect } from "react";
import EmployeeList from "./components/EmployeeList";
import EditEmployeeModal from "./components/EditEmployeeModal";

function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/employees") // Backend API endpoint
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Function to handle the click for editing employee
  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  // Function to save the edited employee data
  const handleSave = (id, updatedData) => {
    // Send PUT request to update the employee in the backend
    fetch(`http://localhost:4000/employees/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        setEmployees(
          employees.map((emp) => (emp.id === id ? { ...emp, ...data } : emp))
        );
        setIsModalOpen(false);
      })
      .catch((error) => console.error("Error updating employee:", error));
  };

  return (
    <div className="App">
      <EmployeeList employees={employees} onEditClick={handleEditClick} />
      {selectedEmployee && (
        <EditEmployeeModal
          employee={selectedEmployee}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

export default App;
