import React, { useState } from 'react';
import { addDeviceService } from './addDeviceService.ts';

const AddDeviceForm: React.FC = () => {
  const [deviceName, setDeviceName] = useState('');
  const [ip, setIp] = useState('');
  const [env, setEnv] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset error state
    setError('');

    // Validate input fields
    if (!deviceName || !ip || !env) {
      setError('All fields are required.');
      return;
    }

    try {
      const newDevice = { device_name: deviceName, ip, env };
      await addDeviceService(newDevice); // Call the service function
      // Optionally, reset form fields
      setDeviceName('');
      setIp('');
      setEnv('');
      // Notify the user of success or refresh the device list here.
    } catch (err) {
      console.error("Error adding device:", err);
      setError('Failed to add device. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Device Name</label>
        <input
          type="text"
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out p-2"
          required
          placeholder="Enter device name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">IP Address</label>
        <input
          type="text"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out p-2"
          required
          placeholder="Enter IP address"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Environment</label>
        <input
          type="text"
          value={env}
          onChange={(e) => setEnv(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out p-2"
          required
          placeholder="Enter environment"
        />
      </div>
      {error && <div className="text-red-600">{error}</div>}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
      >
        Add Device
      </button>
    </form>
  );
};

export default AddDeviceForm;