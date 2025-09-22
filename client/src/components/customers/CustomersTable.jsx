import React, { useEffect, useState } from "react";
import { getCustomers } from "../../services/customers";
import { FaCheck } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { IoPrint } from "react-icons/io5";


const headers = [
  "Name",
  "Oil Type",
  "Oil Grade",
  "Current KM",
  "Next KM",
  "Replace Oil Filter",
  "Replace Gasoline Filter",
  "Action",
];

function CustomersTable({ searchTerm }) {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await getCustomers();
        setCustomers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCustomers();
  }, []);

  const filteredCustomers = customers.filter((customer) =>
    customer.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          color: #333333;
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
  

  return (
    <div className="p-6 relative overflow-x-auto w-full">
      <table className="w-full text-md text-left bg-bg-200 text-dark-200 rounded-md">
        <thead>
          <tr className="text-md text-dark-100 uppercase bg-bg-300 border-b">
            {headers.map((header, index) => (
              <th scope="col" className="px-6 py-3" key={index}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
            <tr className="bg-bg-200 border-b border-dark-100" key={customer._id}>
              <td className="px-6 py-4">{customer.name}</td>
              <td className="px-6 py-4">{customer.oil?.type}</td>
              <td className="px-6 py-4">{customer.oil?.grade}</td>
              <td className="px-6 py-4">{customer.currentKM}</td>
              <td className="px-6 py-4">{customer.nextKM}</td>
              <td className="px-6 py-4">
                {customer.replaceOilFilter === true ? (
                  <FaCheck color="green" size={20} />
                ) : (
                  <MdClose color="red" size={20} />
                )}
              </td>
              <td className="px-6 py-4">
                {customer.replaceGasolineFilter === true ? (
                  <FaCheck color="green" size={20} />
                ) : (
                  <MdClose color="red" size={20} />
                )}
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handlePrint(customer)}
                  className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
                >
                  <IoPrint color={"white"}/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomersTable;
