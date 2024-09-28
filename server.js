const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let employees = [
  { id: 1, name: "Arun", email: "arun@gmail.com", body: "Developer" },
  { id: 2, name: "balaji", email: "balaji@gmail.com", body: "UI/UXDesigner" },
];

// GET all employees
app.get("/employees", (req, res) => {
  res.json(employees);
});

// POST (Create) employee
app.post("/employees", (req, res) => {
  const newEmployee = { id: Date.now(), ...req.body };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

// PUT (Update) employee by id
app.put("/employees/:id", (req, res) => {
  const { id } = req.params;
  const updatedEmployee = req.body;
  employees = employees.map((emp) =>
    emp.id === parseInt(id) ? { ...emp, ...updatedEmployee } : emp
  );
  const savedEmployee = employees.find((emp) => emp.id === parseInt(id));
  res.json(savedEmployee);
});

// DELETE employee by id
app.delete("/employees/:id", (req, res) => {
  const { id } = req.params;
  employees = employees.filter((emp) => emp.id !== parseInt(id));
  res.status(204).end();
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
