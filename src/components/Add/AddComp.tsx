import React from 'react';
import AddDeviceForm from './AddDeviceForm'; // Import the Form component

const AddComp: React.FC = () => {
  return (
    <div className="p-4">
      <AddDeviceForm /> {/* Use the Form component */}
    </div>
  );
};

export default AddComp;
