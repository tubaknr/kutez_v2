"use client";

const { useState, useEffect } = require("react");

const GoldPrice = ({ weight, rating, onPriceChange }) => {
  const [goldPrice, setGoldPrice] = useState(null);

  useEffect(() => {
    const fetchGoldPrice = async () => {
      try {
        const response = await fetch("/api/goldPrice/");
        const data = await response.json();

        setGoldPrice(data);
      } catch (error) {
        console.log("ERROR CALCULATING GOLD PRICE :", error);
        console.error("gold price error : ", error);
      }
    };
    fetchGoldPrice();
  }, []);

  if (goldPrice === null) {
    return <p>Loading...</p>;
  }

  //   console.log("goldPrice: ", goldPrice);
  const finalPrice = (
    (rating + 1) *
    weight *
    Number(goldPrice.goldPrice)
  ).toFixed(2);
  console.log("finalPrice:", finalPrice);
  //   onPriceChange(finalPrice);
  return <p>${finalPrice}</p>;
};

export default GoldPrice;
