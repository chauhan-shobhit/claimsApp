require("dotenv/config");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const user = require("./routes/api/user");
const claim = require("./routes/api/claim");
const policy = require("./routes/api/policy");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: "true",
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

//Using Passport
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

app.use("/v1/user", user);
app.use("/v1/claim", claim);
app.use("/v1/policy", policy);

const port = process.env.PORT || 7890;

app.listen(port, () => console.log(`server running on port ${port}`));
