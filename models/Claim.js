const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClaimSchema = new Schema({
  // user: {
  // type: Schema.Types.ObjectId,
  //ref: "user",
  //},
  claimId: {
    type: Number,
  },

  email: {
    type: String,
    required: true,
  },

  policyNumber: {
    type: Number,
    required: true,
  },

  summary: {
    type: String,
    required: true,
  },
  phoneNumberToCall: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["Started", "In Review", "On Hold", "Closed", "Approved", "Rejected"],
    default: "Started",
  },
});

module.exports = Claim = mongoose.model("claims", ClaimSchema);
