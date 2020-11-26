require("dotenv/config");

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Policy = require("../../models/POlicy");

// @route   GET /v1/policy/health
// @desc    health check of policy
// @access  @public

router.get("/health", (req, res) => res.json({ message: "Policy is fine" }));

// @route   GET /v1/policy/:policyId
// @desc    Get details of policy from PolicyNumber
// @access  @public

router.get("/:policyIdInReq", async (req, res) => {
  //console.log(req.params.claimIdInReq);
  try {
    const policy = await Policy.find({
      policyNumber: req.params.policyIdInReq,
    });
    res.json(policy);
  } catch (err) {
    res.json({ message: err });
  }
});

// @route   GET /v1/policy/type/:policyId
// @desc    Get details of all policies from Policytype
// @access  @public

router.get("/type/:policyStatusInReq", async (req, res) => {
  console.log(req.params.policyStatusInReq);
  try {
    const policy = await Policy.find({
      status: req.params.policyStatusInReq,
    });
    res.json(policy);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/create", async (req, res) => {
  //console.log("creating policy " + req.body.email);

  const policy = new Policy({
    email: req.body.email,
    policyNumber: req.body.policyNumber,
    lastFour: req.body.lastFour,
    policyType: req.body.policyType,
    status: req.body.status,
    comments: req.body.comments,
  });

  policy.policyNumber = Math.floor(Date.now() * Math.random(10));

  try {
    const savedPolicy = await policy.save();
    res.json(policy);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
