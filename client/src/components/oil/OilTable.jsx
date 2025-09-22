import React from "react";
import { Link } from "react-router-dom";

const headers = [
  "Type",
  "Grade",
  "Brand",
  "Volume",
  "Buy Price",
  "Sell Price",
  "Stock",
  "Expire",
  "Actions",
];

function OilTable({ oils }) {
  const handleDeleteOil = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this oil?");
    if (!confirm) return;
    try {
      await deleteOil(id);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative overflow-x-auto w-full">
      <table className="w-full text-md text-left bg-bg-300 rtl:text-right text-dark-200">
        <thead className="text-md text-dark-100 uppercase bg-bg-200">
          <tr>
            {headers.map((header, index) => (
              <th scope="col" className="px-6 py-3" key={index}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {oils.map((oil) => (
            <tr className="bg-bg-200 border-b border-dark-100" key={oil._id}>
              <td className="px-6 py-4">{oil.type}</td>
              <td className="px-6 py-4">{oil.grade}</td>
              <td className="px-6 py-4">{oil.brand}</td>
              <td className="px-6 py-4">{oil.volume}L</td>
              <td className="px-6 py-4">${oil.buyPrice}</td>
              <td className="px-6 py-4">${oil.sellPrice}</td>
              <td className="px-6 py-4">{oil.stock}</td>
              <td className="px-6 py-4">{oil.expire}</td>
              <td className="px-6 py-4 flex gap-2">
                <Link
                  to={`/edit-oil/${oil._id}`}
                  className="px-2 py-1 bg-blue-600 text-white rounded-sm"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDeleteOil(oil._id)}
                  to={"/delete-oil"}
                  className="px-2 py-1 bg-red-600 text-white rounded-sm cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OilTable;
