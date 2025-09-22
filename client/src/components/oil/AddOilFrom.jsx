import React, { useState } from "react";
import AddOilInput from "./AddOilInput";
import { Link, useNavigate } from "react-router-dom";
import { addOil } from "../../services/oils";

function AddOilFrom() {
  const [form, setForm] = useState({
    type: "",
    grade: "",
    brand: "",
    volume: "",
    buyPrice: "",
    sellPrice: "",
    stock: "",
    expire: "",
  });
  const navigate = useNavigate();

  const handleAddOil = async (e) => {
    e.preventDefault();
    const formattedExpire = form.expire.split("T")[0];
    try {
      await addOil({
        ...form,
        expire: formattedExpire
      })
      alert("Oil added successfully");
      navigate("/oils")
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleAddOil} className="flex gap-8 flex-wrap w-full gap-y-8">
      <AddOilInput
        label={"Oil Type"}
        placeholder={"Synthetic"}
        value={form.type}
        inputChange={(value) => setForm({ ...form, type: value })}
      />
      <AddOilInput
        label={"Grade"}
        placeholder={"5W-30"}
        value={form.grade}
        inputChange={(value) => setForm({ ...form, grade: value })}
      />
      <AddOilInput
        label={"Brand"}
        placeholder={"Castrol"}
        value={form.brand}
        inputChange={(value) => setForm({ ...form, brand: value })}
      />
      <AddOilInput
        label={"Volume"}
        type={"number"}
        placeholder={"10L"}
        value={form.volume}
        inputChange={(value) => setForm({ ...form, volume: value })}
      />
      <AddOilInput
        label={"Buy Price"}
        type={"number"}
        placeholder={"3.99$"}
        value={form.buyPrice}
        inputChange={(value) => setForm({ ...form, buyPrice: value })}
      />
      <AddOilInput
        label={"Sell Price"}
        type={"number"}
        placeholder={"5.00$"}
        value={form.sellPrice}
        inputChange={(value) => setForm({ ...form, sellPrice: value })}
      />
      <AddOilInput
        label={"Stock"}
        type={"number"}
        placeholder={"100"}
        value={form.stock}
        inputChange={(value) => setForm({ ...form, stock: value })}
      />
      <AddOilInput
        label={"Expire"}
        type={"date"}
        placeholder={"2025-12-31"}
        value={form.expire}
        inputChange={(value) => setForm({ ...form, expire: value })}
      />

      <div className="flex gap-4 w-full items-center justify-center mt-4">
        <button
          type="submit"
          className="w-96 h-12 self-center rounded-md bg-accent-200 text-white font-bold cursor-pointer hover:bg-accent duration-300"
        >
          Add
        </button>
        <Link
          to={"/oils"}
          className="w-96 h-12 self-center rounded-md flex items-center justify-center bg-bg-300 text-white font-bold cursor-pointer hover:bg-bg-200 hover:text-accent-200 duration-300"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}

export default AddOilFrom;
