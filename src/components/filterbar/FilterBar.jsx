import React, { useState } from "react";
import "./FilterBar.css";

const FilterBar = ({ onFilterChange, onSortChange }) => {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    onFilterChange(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
    onSortChange(event.target.value);
  };

  return (
    <div className="filter-bar">
      <select
        value={category}
        onChange={handleCategoryChange}
        aria-label="Filter by category"
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
      <select
        value={sort}
        onChange={handleSortChange}
        aria-label="Sort by price"
      >
        <option value="">Sort by Price</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
      </select>
    </div>
  );
};

export default FilterBar;
