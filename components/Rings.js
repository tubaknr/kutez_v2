"use client";

import ProductCard from "./ProductCard/ProductCard";
import useRings from "@/app/hooks/useRings";

const Rings = () => {
  const rings = useRings();
  // console.log(rings);
  return (
    <div>
      <h1 className="top-header">Product List</h1>
      <div className="content">
        <div className="grid">
          {rings.map((product, index) => (
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
