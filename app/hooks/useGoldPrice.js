"use client";
// //www.goldapi.io/dashboard
import { useState, useEffect } from "react";

const useGoldPrice = () => {
  const [goldPrice, setGoldPrice] = useState(null);

  useEffect(() => {
    const fetchGoldPrice = async () => {
      try {
        const response = await fetch("/api/goldPrice/");
        const data = await response.json(); // stringify dan sonra tekrar json a çevir

        setGoldPrice(data);
      } catch (error) {
        // console.log("ERROR CALCULATING GOLD PRICE :", error);
        console.error("gold price fetching error useGoldPrice: ", error);
      }
    };
    fetchGoldPrice();
  }, []);

  return goldPrice;
};

export default useGoldPrice;
