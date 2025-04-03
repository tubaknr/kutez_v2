"use client";

import styles from "./ProductCard.module.css";
import GoldTypeSelector from "../GoldTypeSelector/GoldTypeSelector";
import { useState } from "react";
import StarRating from "../StarRatings.js/StarRating";
import FinalGoldPrice from "../FinalGoldPrice/FinalGoldPrice";

const ProductCard = ({ title, imagesList, rating, weight }) => {
  const [selectedGoldType, setSelectedGoldType] = useState("yellow");
  return (
    <>
      <div className={styles.productCard}>
        <img
          src={imagesList[selectedGoldType]}
          alt={title}
          className={styles.productImage}
        />

        <h2>{title}</h2>
        <FinalGoldPrice weight={weight} rating={rating} />

        <GoldTypeSelector
          selectedType={selectedGoldType}
          onSelect={setSelectedGoldType}
        />

        <StarRating rating={(rating * 5).toFixed(1)} />
      </div>
    </>
  );
};

export default ProductCard;
