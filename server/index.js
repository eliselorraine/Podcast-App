const express = require("express");
const { Client } = require('podcast-api');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const client = Client({
  // apiKey: process.env.LISTEN_API_KEY || null,
  apiKey: null,
});

const app = express();

app.get("/api", (req, res) => {
  client.search({ q: 'barack obama', sort_by_date: 1, only_in: 'title,description' })
  .then((response) => {
    const data = response.data;
    res.json(data);
  }).catch((error) => {
    console.log(error);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});