# Intern-Task
Employee Management Dashboard 
Overview : 
This project is a simple Employee Management Dashboard built with React for the frontend and Node.js/Express.js for the backend. It allows users to:

View employee data in the form of cards.
Edit employee details via a modal form.
Perform CRUD operations on the employee data (Create, Read, Update, Delete).
Features
List of Employee Cards:

Displays employee data like name, email, and job description in a card layout.
Each employee is represented on an individual card.
Edit Employee Information:

Users can edit an employee's information by clicking the "Edit" button on the card, which opens a modal form.
Once edited, the changes will be reflected in the list.
CRUD Operations:

Create: Add new employees through API requests.
Read: Fetch and display employee data from a backend API.
Update: Edit employee details.
Delete: Remove an employee from the list.
Project Structure
Frontend (React)
Components:
EmployeeList.js: Displays all employee cards.
EditEmployeeModal.js: A modal component to edit employee details.
State Management:
Managed using React's useState and useEffect hooks to handle employee data and modals.
API Fetching:
Fetches employee data from the backend at http://localhost:4000/employees.
Backend (Node.js/Express)
Endpoints:
GET /employees: Fetch all employees.
POST /employees: Add a new employee.
PUT /employees/:id: Update employee details.
DELETE /employees/:id: Remove an employee by ID.
Technologies Used
Frontend:

React (Hooks: useState, useEffect)
HTML, CSS, JavaScript (No React UI Framework)
Backend:

Node.js
Express.js
Body-parser (For parsing JSON requests)
CORS (Cross-Origin Resource Sharing)
Setup Instructions
Prerequisites:
Node.js installed on your system.
Git installed.
Postman (optional for API testing).
Frontend Setup (React)
Clone the repository:
bash
Copy code
git clone https://Swathi-Selvaraju/Intern-Task.git
Navigate to the project folder:
bash
Copy code
cd Intern-Task
Install dependencies:
bash
Copy code
npm install
Run the React app:
bash
Copy code
npm start
Open the app in your browser at http://localhost:3000.
Backend Setup (Node.js/Express)
In a separate terminal, navigate to the backend folder:
bash
Copy code
cd backend
Install backend dependencies:
bash
Copy code
npm install
Run the backend server:
bash
Copy code
node server.js
The server will start at http://localhost:4000.


Future Improvements
Add form validation for employee inputs.
Implement user authentication.
Add a search/filter feature to search employees by name or job role.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
Feel free to contribute to the project by creating a pull request. Any suggestions or improvements are welcome!

Author
Swathi S
