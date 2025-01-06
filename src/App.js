import React, { useEffect, useState } from "react";

function App() {
  const [goldRate, setGoldRate] = useState(null);

  useEffect(() => {
    async function fetchGoldRate() {
      try {
        const response = await fetch("http://localhost:5000/api/gold-rate");
        const data = await response.json();
        setGoldRate(data.rate);
      } catch (error) {
        console.error("Error fetching gold rate:", error);
      }
    }

    fetchGoldRate();
  }, []);

  return (
    <div>
      <h1>Gold Rate (22k)</h1>
      <p>{goldRate ? `₹${goldRate.toFixed(2)} / gram` : "Loading..."}</p>
    </div>
  );
}

export default App;
