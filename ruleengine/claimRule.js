const engine = require("json-rules-engine");

let claimRule = {
  conditions: {
    all: [
      {
        fact: "status",
        operator: "in",
        value: ["Active"],
        path: "$.status",
      },
      {
        fact: "amount",
        operator: "lessThanInclusive",
        value: 500,
        path: "$.amount",
      },
    ],
  },
  event: {
    type: "approved",
    params: {
      message: "true",
    },
  },
};

module.exports = claimRule;
