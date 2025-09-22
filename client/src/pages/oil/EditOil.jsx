import React, { useState } from "react";
import EditOilFrom from "../../components/oil/EditOilForm";

function EditOil() {
  return (
    <div
      style={{ backgroundImage: "url(/images/add-oil/bg.jpg)" }}
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
    >
      <div className="w-4/6 h-5/6 backdrop-blur-lg rounded-2xl flex flex-col justify-center items-center p-8 gap-10">
        <h1 className="text-dark-100 font-bold text-3xl">Edit Oil</h1>

        <EditOilFrom />

      </div>
    </div>
  );
}

export default EditOil;
