// import express from "express";
// import data from "./data.js";
// import cors from "cors";
// import corsOptions from "./config/corsOptions";

const express = require("express");
const data = require("./data");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");

const app = express();
const PORT = process.env.port || 5000;

app.use(cors(corsOptions));

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
