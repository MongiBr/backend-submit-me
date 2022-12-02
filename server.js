const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const feedbackRoute = require("./routes/feedbacks");

const { MONGO_URL } = require("./config/config");

dotenv.config();

//middleware

app.use(express.json());
var corsOptions = {
 origin: "*",
 optionsSuccessStatus: 200,
 credentials: true, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("common"));

app.get("/", function (req, res) {
 res.send("server is running...");
});

app.use("/api/v1/feedback", feedbackRoute);

mongoose
 .connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
 })
 .then(() => console.log("Database connected!"))
 .catch((err) => console.log(err));
app.listen(8080, () => {
 console.log("Backend server is running!");
});
