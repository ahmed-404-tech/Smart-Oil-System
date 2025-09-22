import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full h-14 bg-white drop-shadow-md p-3 px-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Link to={"/"}>
          <IoIosArrowBack size={30} />
        </Link>
        <h1 className="text-xl">Customers</h1>
      </div>

      <div>
        <h2 className="text-md">Number of Customers: <span className="font-bold">10</span></h2>
      </div>
    </div>
  );
}

export default Header;
