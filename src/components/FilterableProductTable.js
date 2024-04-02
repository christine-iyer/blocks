import React, { useState } from 'react'
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';




export default function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');


  return (
    <div>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText} />
      <ProductTable
        products={products}
        filterText={filterText} />
    </div>
  );
}





