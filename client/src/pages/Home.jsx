import React, { useEffect } from "react";
import HomeCart from "../components/HomeCart";
import HomeFooter from "../components/HomeFooter";
import HomeHeader from "../components/HomeHeader";
function Home() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <HomeHeader />
      <div>
        <h2 className="absolute top-1/5 left-32 text-2xl text-dark-100 font-bold">Welcome <span className="text-accent-200">Ahmed</span>,</h2>
      </div>
      <div className="w-full h-full flex items-center justify-center flex-wrap gap-8">
        <HomeCart title={"Users"} icon={"users"} to={"/users"}/>
        <HomeCart title={"Oils"} icon={"oil"} to={"/oils"}/>
        <HomeCart title={"Customers"} icon={"customers"} to={"/customers"}/>
        <HomeCart title={"Reports"} icon={"reports"} to={"/reports"}/>
      </div>
      <HomeFooter />
    </div>
  );
}

export default Home;
