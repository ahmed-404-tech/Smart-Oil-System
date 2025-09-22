import React from "react";

function AddCustomerInput({ value, inputChange, label, placeholder }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-lg font-medium">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => inputChange(e.target.value)}
        placeholder={placeholder}
        className="border-2 border-gray-300 w-full h-12 rounded-md pl-3 text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        required
      />
    </div>
  );
}

export default AddCustomerInput;
