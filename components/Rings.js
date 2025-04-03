"use client";

import ProductCard from "./ProductCard/ProductCard";

const { useState, useEffect } = require("react");

const Rings = () => {
  const [rings, setRings] = useState([]);

  useEffect(() => {
    const fetchRings = async () => {
      try {
        const response = await fetch("/api/rings");
        // console.log("RESPONSE COMP/RINGS.JS: ", response);
        if (!response.ok) {
          throw new Error(
            "Network response was not okeyyyyy! components/rings.js"
          );
        }
        const data = await response.json();
        console.log("data COMP/RINGS.JS: ", data); // 8İNİ BİRDEN ÇEKİYOR. TAMAM.
        setRings(data);
      } catch (error) {
        console.log("ERROR COMPONENTS/RINGS.JS:", error);
        console.error("Failed to fetch:", error);
      }
    };
    fetchRings();
  }, []);

  return (
    <div>
      <h1 className="top-header">Product List</h1>
      <div className="content">
        <div className="grid">
          {rings.map((product, index) => (
            <ProductCard
              key={index}
              image={product.images.yellow}
              title={product.name}
              price={product.price}
              goldType={"Yellow"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rings;
