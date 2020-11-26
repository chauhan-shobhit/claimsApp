const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PolicySchema = new Schema({
  policyNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  lastFour: {
    type: Number,
    required: true,
  },
  policyType: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Active", "Expired", "Closed", "Cancelled"],
    default: "Active",
  },
  comments: {
    type: String,
  },
});

module.exports = Policy = mongoose.model("policies", PolicySchema);
