const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connect (Mongoose 7+)
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connected ✅"))
    .catch(err => console.error("MongoDB connection error:", err));

// Test Route
app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
