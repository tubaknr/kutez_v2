"use client";

import { useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import useRings from "@/app/hooks/useRings";

const Rings = () => {
  const allRings = useRings();
  const [filter, setFilter] = useState("all");

  const filteredRings = () => {
    switch (filter) {
      case "most-popular":
        return [...allRings].sort(
          (a, b) => b.popularityScore - a.popularityScore
        );
      case "low-to-high": //price low to high
        return [...allRings].sort((a, b) => a.weight - b.weight);

      case "high-to-low": //price high to low
        return [...allRings].sort((a, b) => b.weight - a.weight);

      default:
        return allRings;
    }
  };

  return (
    <div>
      <div>
        <h1 className="top-header">Product List</h1>

        <div className="filterButtons">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("most-popular")}>
            Most Popular
          </button>
          <button onClick={() => setFilter("low-to-high")}>
            Price: Low to High
          </button>
          <button onClick={() => setFilter("high-to-low")}>
            Price: High to Low
          </button>
        </div>
        
      </div>

      <div className="content">
        <div className="grid">
          {filteredRings().map((product, index) => (
            <ProductCard
              key={index}
              title={product.name}
              imagesList={product.images}
              rating={product.popularityScore}
              weight={product.weight}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rings;
