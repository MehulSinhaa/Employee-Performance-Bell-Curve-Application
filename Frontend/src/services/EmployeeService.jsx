import axios from 'axios';  // Import axios library to make HTTP requests

const API_URL = 'http://localhost:8080/api/demo';  // Define the backend API base URL
const addEmployee = (employee) => {                // Function to add a new employee to the backend
  return axios.post(`${API_URL}/add`, employee);            // Send a POST request to the backend with the employee data
};
export default {       // Export the addEmployee function as part of the default export
  addEmployee,
};