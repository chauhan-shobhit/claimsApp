require("dotenv/config");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const user = require("./routes/api/user");
const claim = require("./routes/api/claim");
const policy = require("./routes/api/policy");

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')




const swaggerOptions = {
  
  swaggerDefinition: {
  
    info: {
      version: "1.0.1",
      title: "Claims Application",
      description: "API information of Claims Application",
      servers: "http://localhost:1221"
    }
  },
  url: 'http://petstore.swagger.io/v2/swagger.json', 
  apis: ["./routes/api/*.js"]
};
const app = express();

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));



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
