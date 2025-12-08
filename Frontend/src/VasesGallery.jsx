import React, { useEffect, useState } from "react";
import stylesV from "./VasesGallery.module.css";

function VasesGallery() {
  const [vases, setVases] = useState([]);
  const [filter, setFilter] = useState("All");

  // 🔹 Load only admin-added items from localStorage
  useEffect(() => {
    const adminItems = JSON.parse(localStorage.getItem("adminItems")) || [];
    // Case-insensitive filter
    const vasesFromAdmin = adminItems.filter(
      (item) => item.category.toLowerCase() === "vases"
    );
    setVases(vasesFromAdmin);
  }, []);

  const filteredVases =
    filter === "All"
      ? vases
      : vases.filter((v) => v.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className={stylesV.wrapper}>
      <div className={stylesV.header}>
        <h1 className={stylesV.heading}>🏺 Vases Gallery</h1>

        {/* 🔹 Optional Filter Dropdown */}
        {/* 
        <div className={stylesV.filterContainer}>
          <label className={stylesV.filterLabel}>Filter:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={stylesV.filterSelect}
          >
            <option value="All">All</option>
            <option value="Ceramic">Ceramic</option>
            <option value="Glass">Glass</option>
            <option value="Wood">Wood</option>
            <option value="Decorative">Decorative</option>
            <option value="Vintage">Vintage</option>
            <option value="Metal">Metal</option>
            <option value="Modern">Modern</option>
            <option value="Premium">Premium</option>
          </select>
        </div> 
        */}
      </div>

      {/* 🔹 Vase Cards Grid */}
      <div className={stylesV.container}>
        {filteredVases.length === 0 ? (
          <p>No vases added yet.</p>
        ) : (
          filteredVases.map((vase) => (
            <div key={vase.id} className={stylesV.card}>
              <img src={vase.image} alt={vase.name} className={stylesV.image} />
              <div className={stylesV.info}>
                <h3 className={stylesV.title}>{vase.name}</h3>
                <p className={stylesV.price}>Rs {vase.price}</p>
                <button className={stylesV.button}>Add to Cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default VasesGallery;
