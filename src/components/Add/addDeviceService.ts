import axios from 'axios';
import { API_URL } from './../../constants'; // Adjust the import based on your project structure

// Function to add a new device
export const addDeviceService = async (deviceData: { device_name: string; ip: string; env: string }): Promise<void> => {
  try {
    await axios.post(`${API_URL}devices/add`, deviceData); // Adjust the endpoint based on your API
  } catch (error) {
    console.error("Error adding device:", error);
    throw error; // Re-throw the error for handling in the form component
  }
};
