const nodemailer = require("nodemailer");

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@address.com",
    pass: "yourpassword",
  },
});

module.exports = mailTransporter;
