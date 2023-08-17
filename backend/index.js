const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Make sure to import axios

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "4ca967d8-56b6-4bbf-bd9a-fce4db884784" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response) {
      // Handle the case where e.response is defined
      return res.status(e.response.status).json(e.response.data);
    } else {
      // Handle the case where e.response is undefined
      return res.status(500).json({ error: "An unexpected error occurred." });
    }
  }
});

app.listen(3001);
