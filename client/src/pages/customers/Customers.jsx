import React, { useState } from 'react';
import Header from '../../components/customers/header';
import SearchBox from '../../components/customers/SearchBox';
import CustomersTable from '../../components/customers/CustomersTable';

function Customers() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className='flex items-center flex-col'>
      <Header />
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CustomersTable searchTerm={searchTerm} />
    </div>
  );
}

export default Customers;
