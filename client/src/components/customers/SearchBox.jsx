import React from "react";
import { Link } from "react-router-dom";

function SearchBox({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-full h-14 p-3 px-6 flex items-center mt-4 gap-4">
      <div className="w-2/4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-2 border-dark-200 w-full h-14 rounded-md px-4 text-lg text-dark-100 placeholder:text-dark-200"
          placeholder="Search for a customer..."
        />
      </div>
      <div>
        <Link
          to={"/add-customer"}
          className="text-lg w-48 h-14 bg-accent-200 flex items-center justify-center rounded-md text-white"
        >
          New Customer
        </Link>
      </div>
    </div>
  );
}

export default SearchBox;
