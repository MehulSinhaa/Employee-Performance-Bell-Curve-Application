# Employee Performance Bell Curve Application

## Overview

This project provides a solution to create a bell curve for performance appraisal based on employee details, rating categories, and appraisal ranges.
The application calculates the actual percentage distribution of employees across various performance categories, calculates deviations from standard percentages, 
and suggests adjustments for overrepresented categories. The backend is built using **Spring Boot** for the server-side logic, 
and the frontend is a simple **React.js** application for visualizing the data.

---

## Features

1. **Backend (Spring Boot)**:
   - RESTful API to manage employee data.
   - Calculate actual percentage distribution of employees across categories.
   - Calculate deviation between actual and standard percentages.
   - Suggest adjustments for employees in overrepresented categories.

2. **Frontend (React.js)**:
   - Displays the employee data, performance categories, and visualizes the bell curve.
   - Provides UI to add new employees and view the analysis results.

---

## Tech Stack

- **Backend**:
  - Java 17
  - IntelliJ IDEA (IDE)
  - Spring Boot
  - Spring Data JPA
  - MYSQL Workbench (for local storage)
  
- **Frontend**:
  - React.js
  - VS Code (IDE)
  - Axios (for HTTP requests)

- **Tools**:
  - Git & GitHub for version control
  - Maven for managing backend dependencies
  - Node.js and npm for frontend dependencies

---

## Project Structure

### Backend (Spring Boot)

1. **`com.example.demo`**: The base package containing the Spring Boot application.
   - **`BellCurveApplication.java`**: The main class to run the Spring Boot application.

2. **`com.example.demo.model`**:
   - **`Employee.java`**: The model representing an employee.
   - **`Category.java`**: The model representing performance categories.

3. **`com.example.demo.repository`**:
   - **`EmployeeRepo.java`**: The repository interface for CRUD operations on employees.

4. **`com.example.demo.service`**:
   - **`BellCurveService.java`**: The service class containing business logic to calculate percentages, deviations, and suggest adjustments.

5. **`com.example.demo.controller`**:
   - **`BellCurveController.java`**: The controller that exposes REST API endpoints to interact with the frontend.

### Frontend (React.js)

- **`src/`**: Contains the main React application files.
   - **`App.js`**: The root component for the frontend application.
   - **`EmployeeList.js`**: Displays the list of employees and performance categories.
   - **`AddEmployee.js`**: Form to add new employees.

---

## How to Run the Backend in IntelliJ IDEA Community Edition

1. Open the Project
Open IntelliJ IDEA and select File > Open.
Choose the project directory

2. Install Java Development Kit (JDK)
Ensure JDK 17 or higher is installed.

3. Set Up Maven (if needed)
IntelliJ will automatically handle Maven dependencies. If not, ensure Maven is installed and available in the system’s PATH.

4. Run the Application
Locate the BellCurveApplication.java file in the src/main/java directory.
Right-click on BellCurveApplication and select Run 'BellCurveApplication'.
Alternatively, create a Spring Boot run configuration:

Run > Edit Configurations > Add Spring Boot.
Set Main class to com.example.demo.BellCurveApplication.
Click OK and then click the Run button.

5. Verify the Application
The app will run on http://localhost:5173
Test the API at: http://localhost:8080/api/demo/analyze

-----

## How to Run Frontend in Command Prompt

1. Navigate to the Project Directory: Open Command Prompt (or Terminal) and run:
cd path\to\your\frontend\project

2. Install Dependencies: Run the following command to install dependencies:
npm install

3. Start the Development Server: After installation, run:
npm run dev

4. Access the Frontend: Open your browser and go to:
employee-performance@0.0.0 dev
> vite
  VITE v6.0.5  ready in 779 ms
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
