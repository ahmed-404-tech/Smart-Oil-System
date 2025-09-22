import React, { useState, useEffect } from "react";
import AddOilInput from "./AddOilInput";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getOneOil, updateOil } from "../../services/oils";

function EditOilForm() {
  const { id } = useParams();
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

  useEffect(() => {
    const fetchOilData = async () => {
      try {
        const oilData = await getOneOil(id);
        setForm({
          type: oilData.type,
          grade: oilData.grade,
          brand: oilData.brand,
          volume: oilData.volume,
          buyPrice: oilData.buyPrice,
          sellPrice: oilData.sellPrice,
          stock: oilData.stock,
          expire: oilData.expire,
        });
      } catch (error) {
        console.log("Error fetching oil data:", error);
      }
    };
    fetchOilData();
  }, [id]);

  const handleUpdateOil = async (e) => {
    e.preventDefault();
    const formattedExpire = form.expire.split("T")[0];
    try {
      await updateOil(id, {
        ...form,
        expire: formattedExpire,
      });
      console.log(form);
      alert("Oil updated successfully");
      navigate("/oils");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleUpdateOil}
      className="flex gap-8 flex-wrap w-full gap-y-8"
    >
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
          Save Changes
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

export default EditOilForm;
