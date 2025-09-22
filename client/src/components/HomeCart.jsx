import React from "react";
import { Link } from "react-router-dom";

function HomeCart({ title, icon, to }) {
  return (
    <Link to={to} className="flex items-center justify-center flex-col gap-6 drop-shadow-md bg-bg-200 w-72 h-72 rounded-lg hover:scale-105 duration-300">
      <img src={`/icons/${icon}.png`} alt="" />
      <h2 className="text-3xl text-dark-100 font-bold">{title}</h2>
    </Link>
  );
}

export default HomeCart;
