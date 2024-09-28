import React, { useState } from "react";
import "./EditEmployeeModal.css";

function EditEmployeeModal({ employee, isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: employee.name,
    email: employee.email,
    body: employee.body,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(employee.id, formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Employee</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} />

          <label>Email</label>
          <input name="email" value={formData.email} onChange={handleChange} />

          <label>Role</label>
          <textarea name="body" value={formData.body} onChange={handleChange} />

          <button type="submit">Save</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default EditEmployeeModal;
