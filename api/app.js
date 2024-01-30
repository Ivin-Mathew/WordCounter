const express = require("express")
const app = express()
const cors = require("cors")
const { fetchUrlContent } = require("./fetch-url-content")
const { clean } = require("./clean")
const { count } = require("./count")

app.use(cors())
app.use(express.urlencoded(({ extended: true })))

app.post("/", async function (req, res) {
  try {
      const url = req.body.url;

      // Basic input validation: Check if the URL is provided
      if (!url) {
          throw new Error('URL is missing in the request');
      }

      // Fetch content from the provided URL
      const content = await fetchUrlContent(url);

      // Clean the fetched content
      const cleanedContent = clean(content);

      // Count something in the cleaned content
      const result = count(cleanedContent);

      // Send the result back in the response
      res.send(result);
  } catch (error) {
      console.error('Error:', error.message);
      res.status(500).send('Internal Server Error');
  }
});

module.exports = app;