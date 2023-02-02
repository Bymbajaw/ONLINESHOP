const port = 9000;
const express = require("express");
const cors = require("cors")
const app = express();

const menuRouter = require("./routes/menu.route.js");
const cateRouter = require("./routes/cate.route.js");
const productRouter = require("./routes/product.route.js");

const fs = require("fs");

app.use(cors());
app.use(express.json());

app.use("/api", menuRouter);
app.use("/api", cateRouter);
app.use("/api", productRouter);

app.get("/api", (req, res) => {
    res.json({ message: "Welcome Rest API" });
})

app.listen(port, ()=> console.log(`Server is running on http://localhost:${port}`))