import React from "react";

function AddOilInput({ label, type, placeholder, value, inputChange }) {
  return (
    <div className="flex flex-col">
      <label className="text-dark-100 font-bold text-md">{label}</label>
      <input
        type={type}
        className="w-72 h-12 rounded-md bg-bg-200 outline-none px-4 text-lg"
        placeholder={placeholder && `Example: ${placeholder}` || "..."}
        value={value}
        onChange={(e) => inputChange(e.target.value)}
      />
    </div>
  );
}

export default AddOilInput;
