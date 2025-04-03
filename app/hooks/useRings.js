"use client";

import { useState, useEffect } from "react";

const useRings = () => {
  const [rings, setRings] = useState([]);

  useEffect(() => {
    const fetchRings = async () => {
      try {
        const response = await fetch("/api/rings");
        // console.log("RESPONSE COMP/RINGS.JS: ", response);
        if (!response.ok) {
          throw new Error("Network response was not okeyyyyy! useRings hook. ");
        }
        const data = await response.json();
        console.log("data COMP/RINGS.JS: ", data); // 8İNİ BİRDEN ÇEKİYOR. TAMAM.
        setRings(data);
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    };
    fetchRings();
  }, []);

  return rings;
};

export default useRings;
