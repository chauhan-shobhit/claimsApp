require("dotenv/config");

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Claim = require("../../models/Claim");
//const Policy2 = require("../../models/Policy");
//const mailTransporter = require("../../utils/mailTransporter");
//const sgMail = require("@sendgrid/mail");
const Engine = require("json-rules-engine").Engine;
const claimRule = require("../../ruleengine/claimRule");

// @route   GET /v1/claim/health
// @desc    test claim route
// @access  @public

router.get("/health", (req, res) => res.json({ message: "Claim is fine" }));

// @route   GET /v1/claim/:ClaimId
// @desc    Get claim details by claimID
// @access  @public

router.get("/:claimIdInReq", async (req, res) => {
  try {
    const claim = await Claim.find({ claimId: req.params.claimIdInReq });
    res.json(claim);
  } catch (err) {
    res.json({ message: err });
  }
});

// @route   GET /v1/claim/?ClaimID=claimId
// @desc    Get claim details by claimID passed in as query param
// @access  @public

router.get("/", async (req, res) => {
  console.log(req.query.ClaimID);
  try {
    const claim = await Claim.findOne({ claimId: req.query.claimID });
    res.json(claim);
  } catch (err) {
    res.json({ message: err });
  }
});

// @route   POST /v1/claim/create
// @desc    Creating a new claim and running the claim through rule engine
// @access  @public

router.post("/create", async (req, res) => {
  //creating a claim
  const claim = new Claim({
    email: req.body.email,
    policyNumber: req.body.policyNumber,
    summary: req.body.summary,
    amount: req.body.amount,
    phoneNumberToCall: req.body.phoneNumberToCall,
  });
  claim.claimId = Math.floor(Date.now() * Math.random(10));

  //saving the claim to persistent store
  try {
    const savedClaim = await claim.save();
  } catch (err) {
    res.json({ message: err });
  }

  //Finding policy ; if policy exists, then run through rules, else return the new claim

  let policyResult;
  try {
    policyResult = await Policy.findOne({
      policyNumber: req.body.policyNumber,
    });
    if (!policyResult) {
      return res.json(claim);
    }
  } catch (err) {
    res.json({ message: err });
  }

  //initiating a rule engine
  const engine = new Engine();
  //adding a rule
  engine.addRule(claimRule);

  //creating facts object against which rules will be evaluated

  let facts = { status: policyResult.status, amount: claim.amount };

  // Registering the listeners
  //   with the rules engine
  //   for success and failure of rules

  engine
    .on("success", (event) => {
      console.log(
        "Claim approved for $" +
          facts.amount +
          " on an " +
          facts.status +
          " policy"
      );
    })
    .on("failure", (event) => {
      console.log(
        "Claim will move to 'In review' for a claim of $" +
          facts.amount +
          " on " +
          facts.status +
          " policy"
      );
    });

  //run the facts againt the rules

  engine
    .run(facts)
    .then((results) => {
      console.log("All rules executed");
    })
    .catch((err) => console.log(err.stack));

  res.json(claim);
});

module.exports = router;
