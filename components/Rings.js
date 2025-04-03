"use client";
const { useState, useEffect } = require("react");

const Rings = () => {
  const [rings, setRings] = useState([]);

  useEffect(() => {
    const fetchRings = async () => {
      try {
        const response = await fetch("/api/rings");
        console.log("RESPONSE COMP/RINGS.JS: ", response);
        if (!response.ok) {
          throw new Error(
            "Network response was not okeyyyyy! components/rings.js"
          );
        }
        const data = await response.json();
        console.log("data COMP/RINGS.JS: ", data);
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
      {rings.map((ring, index) => (
        <div key={index}>
          <h2>{ring.name}</h2>
          <p>Popularity: {ring.popularityScore}</p>
          <p>Weight: {ring.weight}</p>
          <img src={ring.images.yellow} alt={`${ring.name} Yellow`} />
          <img src={ring.images.rose} alt={`${ring.name} Rose`} />
          <img src={ring.images.white} alt={`${ring.name} White`} />
        </div>
      ))}
    </div>
  );
};

export default Rings;
