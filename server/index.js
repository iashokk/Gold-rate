const express = require("express");
const axios = require("axios");
const cors = require("cors");  // Import CORS middleware
require("dotenv").config();

const app = express();
const PORT = 5000;

// Enable CORS for all origins (you can restrict to specific origins if needed)
app.use(cors());  // Add this line to allow CORS

app.get("/api/gold-rate", async (req, res) => {
  try {
    const response = await axios.get("https://www.goldapi.io/api/XAU/INR", {
      headers: {
        "x-access-token": "goldapi-gbxesm5kjjjqk-io",
      },
    });

    res.json({ rate: response.data.price_gram_24k });
  } catch (error) {
    console.error("Error fetching gold rate:", error.message);
    res.status(500).json({ error: "Failed to fetch gold rate" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
