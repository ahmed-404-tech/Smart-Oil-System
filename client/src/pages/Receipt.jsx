import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCustomers } from "../services/customers";

function PrintReceipt() {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const data = await getCustomers();
        const customer = data.find(cust => cust._id === customerId);
        setCustomer(customer);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCustomer();
  }, [customerId]);

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col p-8 bg-white w-full max-w-lg mx-auto shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-center mb-4">Customer Receipt</h2>
      <div className="space-y-4">
        <p className="text-lg">
          <strong>Name:</strong> {customer.name}
        </p>
        <p className="text-lg">
          <strong>Oil Type:</strong> {customer.oil?.type}
        </p>
        <p className="text-lg">
          <strong>Oil Grade:</strong> {customer.oil?.grade}
        </p>
        <p className="text-lg">
          <strong>Current KM:</strong> {customer.currentKM}
        </p>
        <p className="text-lg">
          <strong>Next KM:</strong> {customer.nextKM}
        </p>
        <p className="text-lg">
          <strong>Replace Oil Filter:</strong> {customer.replaceOilFilter ? "Yes" : "No"}
        </p>
        <p className="text-lg">
          <strong>Replace Gasoline Filter:</strong> {customer.replaceGasolineFilter ? "Yes" : "No"}
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => window.print()}
          className="py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Print Receipt
        </button>
      </div>
    </div>
  );
}

export default PrintReceipt;
