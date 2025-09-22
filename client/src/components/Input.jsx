import React from "react";

function Input({ label, icon, placeholder, type, inputChange, value }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="usernmae">{label}</label>
      <div className="relative">
        <img
          src={`/icons/${icon}.png`}
          alt="icon"
          className="absolute top-2 left-2"
        />
        <input
          type={type}
          className="border-2 border-dark-200 w-full h-12 rounded-md pl-12 text-dark-100 text-lg"
          placeholder={placeholder}
          onChange={(e) => inputChange(e.target.value)}
          value={value}
        />
      </div>
    </div>
  );
}

export default Input;
