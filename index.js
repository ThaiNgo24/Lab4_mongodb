const express = require("express");
require("dotenv").config();
require("./db");

const app = express();
app.use(express.json());

const postRoutes = require("./routes/posts");
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
