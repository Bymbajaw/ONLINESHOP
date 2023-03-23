const port = 9000;
const express = require("express");
const cors = require("cors");
const mongooose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongooose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

const app = express();

const menuRouter = require("./routes/menu.route.js");
const cateRouter = require("./routes/cate.route.js");
const productRouter = require("./routes/product.route.js");
const userRouter = require("./routes/user.route.js");

const fs = require("fs");

app.use(cors());
app.use(express.json());

app.use("/api", menuRouter);
app.use("/api", cateRouter);
app.use("/api", productRouter);
app.use("/api", userRouter);

app.get("/api", (req, res) => {
  res.json({ message: "Welcome Rest API" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
