const express = require("express");
const { Client } = require('podcast-api');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const client = Client({
  // apiKey: process.env.LISTEN_API_KEY || null,
  apiKey: null,
});

const app = express();

app.get("/api/search/:q/:page", (req, res) => {
  client.search({ q: req.params.q, sort_by_date: 1, only_in: 'title,description', language: 'English', offset: req.params.page })
  .then((response) => {
    const data = response.data;
    res.json(data);
  }).catch((error) => {
    console.log(error);
  });
});

app.get("/api/podcasts/:id", (req, res) => {
  client.fetchPodcastById({ id: req.params.id })
  .then((response) => {
    res.json(response.data);
  }).catch((error) => {
    console.log(error);
  });
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});