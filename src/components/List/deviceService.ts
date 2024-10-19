import axios from 'axios';
import { API_URL } from './../../constants';
import { DeviceData } from './TableComp'; // Adjust the import based on your project structure

export const fetchDevices = async (): Promise<DeviceData[]> => {
  try {
    const response = await axios.get(`${API_URL}devices/list`);
    console.log(response);
    return response.data.data.map((device: { device_name: string; ip: string; env: string }, index: number) => ({
      id: index + 1,
      device_name: device.device_name,
      ip: device.ip,
      env: device.env,
    }));
  } catch (error) {
    if (axios.isAxiosError(error)) {
    console.error("Axios error message:", error.message);
    console.error("Axios error config:", error.config);
    } else {
    console.error("Unexpected error:", error);
    }
    return [];
  }
};
