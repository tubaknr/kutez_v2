"use client";
import useGoldPrice from "@/app/hooks/useGoldPrice";
import styles from "./FinalGoldPrice.module.css";

const FinalGoldPrice = ({ weight, rating }) => {
  const goldPrice = useGoldPrice();
  if (goldPrice === null) {
    return <p>Price is calculating...</p>;
  }

  const finalPrice = (
    (rating + 1) *
    weight *
    Number(goldPrice.goldPrice)
  ).toFixed(2);

  return <p className={styles.priceText}>${finalPrice} USD</p>;
};

export default FinalGoldPrice;
