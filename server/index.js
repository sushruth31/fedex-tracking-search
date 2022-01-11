const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

require("./routes")(app);

const PORT = 8080;

app.listen(PORT, () => console.log("Fedex tracking search server running!"));
