const express = require("express");
const app = express();
const port = 3000;
const moment = require("moment-timezone");

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const cors = require("cors");

const routes = require("./routes");
app.use(cors());
const error_handler = require("./middleware/error-handler");

moment.tz.setDefault("Asia/Jakarta");

app.use("/", routes);
app.use(error_handler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
