import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OilTable from "../../components/oil/OilTable";
import {getOils} from "../../services/oils";

function Oils() {
  const [filterExpired, setFilterExpired] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [oils, setOils] = useState([]);

  const handleFilterChange = (event) => {
    setFilterExpired(event.target.checked);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const fetchOils = async () => {
      try {
        const data = await getOils();
        setOils(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOils();
  }, []);

  const filteredOils = oils
    .filter((oil) => {
      const query = searchQuery.toLowerCase();
      return (
        oil.type.toLowerCase().includes(query) ||
        oil.grade.toLowerCase().includes(query) ||
        oil.brand.toLowerCase().includes(query)
      );
    })
    .filter((oil) => (filterExpired ? new Date(oil.expire) < new Date() : true));

  return (
    <div className="flex flex-col items-center h-screen w-full gap-10 p-8">
      <div className="flex flex-col gap-2 w-full">
        <input
          type="text"
          className="w-full border-2 border-dark-200 outline-none h-12 rounded-sm px-4 text-lg"
          placeholder="Search by type, grade, or brand ..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="w-full flex gap-4">
        <Link
          to="/"
          className="self-start text-lg w-48 h-12 bg-bg-300 flex items-center justify-center rounded-md text-white cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/add-oil"
          className="self-start text-lg w-48 h-12 bg-accent-200 flex items-center justify-center rounded-md text-white cursor-pointer"
        >
          Add Oil
        </Link>

        <div className="w-0.5 h-full bg-dark-100 rounded-full"></div>
        <div className="flex items-center gap-6">
          <p className="text-lg font-medium">Filters:</p>

          <div className="flex items-center">
            <div className="flex items-center gap-1">
              <input
                className="w-4 h-4"
                type="checkbox"
                name="expired"
                id="expired"
                checked={filterExpired}
                onChange={handleFilterChange}
              />
              <label htmlFor="expired">Expired</label>
            </div>
          </div>
        </div>
      </div>

      <OilTable oils={filteredOils} />
    </div>
  );
}

export default Oils;
