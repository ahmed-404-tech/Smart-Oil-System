import React, { useState, useEffect } from "react";
import { getOils } from "../../services/oils";
import { addCustomer } from "../../services/customers";
import AddCustomerInput from "./AddCustomerInput";
import { useNavigate } from "react-router-dom";

function AddCustomer() {
  const [name, setName] = useState("");
  const [currentKM, setCurrentKM] = useState("");
  const [nextKM, setNextKM] = useState("");
  const [replaceOilFilter, setReplaceOilFilter] = useState(false);
  const [replaceGasolineFilter, setReplaceGasolineFilter] = useState(false);
  const [selectedOil, setSelectedOil] = useState("");
  const [oils, setOils] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchOils = async () => {
      try {
        const data = await getOils();
        setOils(data);
      } catch (error) {
        console.error("Error fetching oils:", error);
      }
    };
    fetchOils();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCustomer = {
      name,
      currentKM,
      nextKM,
      replaceOilFilter,
      replaceGasolineFilter,
      oil: selectedOil,
    };

    try {
      await addCustomer(newCustomer);
      alert("Customer added successfully");
      navigate("/customers");
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  const handlePrint = (customer) => {
    const printWindow = window.open("", "_blank", "width=600,height=400");
    printWindow.document.write("<html><head><title>Receipt</title>");
    printWindow.document.write(`
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
          margin: 0;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          text-align: left;
          padding: 8px;
          border-bottom: 1px solid #ddd;
        }
        th {
          background-color: #f2f2f2;
          color: #333;
        }
        .header {
          text-align: center;
          color: red;
        }
      </style>
    `);
    printWindow.document.write("</head><body>");
    printWindow.document.write(`
      <div class="header">
        <h2>Receipt</h2>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <td>${customer.name}</td>
        </tr>
        <tr>
          <th>Oil Type</th>
          <td>${customer.oil?.type}</td>
        </tr>
        <tr>
          <th>Oil Grade</th>
          <td>${customer.oil?.grade}</td>
        </tr>
        <tr>
          <th>Current KM</th>
          <td>${customer.currentKM}</td>
        </tr>
        <tr>
          <th>Next KM</th>
          <td>${customer.nextKM}</td>
        </tr>
        <tr>
          <th>Replace Oil Filter</th>
          <td>${customer.replaceOilFilter ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <th>Replace Gasoline Filter</th>
          <td>${customer.replaceGasolineFilter ? "Yes" : "No"}</td>
        </tr>
      </table>
    `);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  const handleAddAndPrint = async (e) => {
    e.preventDefault();
    const newCustomer = {
      name,
      currentKM,
      nextKM,
      replaceOilFilter,
      replaceGasolineFilter,
      oil: selectedOil,
    };

    try {
      const addedCustomer = await addCustomer(newCustomer);
      alert("Customer added successfully");
      handlePrint(addedCustomer); 
      navigate("/customers");
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  return (
    <div
      className="p-6 flex items-center flex-col w-full h-screen bg-cover bg-center bg-no-repeat gap-6"
      style={{
        backgroundImage: "url(/images/add-customer/bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-3xl font-bold text-white shadow-lg p-3 rounded-lg bg-opacity-50 backdrop-blur-md">
        Add New Customer
      </h2>
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-lg p-8 flex flex-col gap-4 backdrop-blur-2xl rounded-3xl w-10/12 max-w-xl shadow-xl "
      >
        <AddCustomerInput
          label="Customer Name"
          placeholder="Enter customer name"
          value={name}
          inputChange={(value) => setName(value)}
        />
        <AddCustomerInput
          label="Current KM"
          placeholder="Enter current kilometers"
          value={currentKM}
          inputChange={(value) => setCurrentKM(value)}
        />
        <AddCustomerInput
          label="Next KM"
          placeholder="Enter next service kilometers"
          value={nextKM}
          inputChange={(value) => setNextKM(value)}
        />

        <div className="flex flex-col gap-4 w-full">
          <label className="text-lg font-medium">Oil Type</label>
          <select
            className="border-2 border-gray-300 w-full h-12 rounded-md pl-2 text-gray-700 shadow-md hover:border-gray-500 transition"
            value={selectedOil}
            onChange={(e) => setSelectedOil(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Oil
            </option>
            {oils.map((oil) => (
              <option key={oil._id} value={oil._id}>
                {oil.type} - {oil.grade}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-row items-center gap-4 justify-start w-full mt-4">
          <div className="flex items-center gap-2">
            <label htmlFor="oil">Replace Oil Filter</label>
            <input
              id="oil"
              type="checkbox"
              className="w-6 h-6 accent-green-500"
              checked={replaceOilFilter}
              onChange={() => setReplaceOilFilter(!replaceOilFilter)}
            />
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="gasoline">Replace Gasoline Filter</label>
            <input
              id="gasoline"
              type="checkbox"
              className="w-6 h-6 accent-red-500"
              checked={replaceGasolineFilter}
              onChange={() => setReplaceGasolineFilter(!replaceGasolineFilter)}
            />
          </div>
        </div>

        <div className="w-full flex justify-between">
          <button
            type="submit"
            className="mt-6 w-60 py-3 cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-md hover:scale-105 transition-all"
          >
            Add Customer
          </button>
          <button
            type="submit"
            onClick={handleAddAndPrint}
            className="mt-6 w-60 py-3 cursor-pointer bg-gradient-to-r from-bg-200 to-bg-300 text-purple-600 font-semibold rounded-md hover:scale-105 transition-all"
          >
            Add and Print
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCustomer;
