import React, { Component } from "react";
import axios from "axios";

class Claim extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      policyNumber: "",
      summary: "",
      phoneNumberToCall: "",
      amount: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();

    const claim = {
      email: this.state.email,
      policyNumber: this.state.policyNumber,
      summary: this.state.summary,
      phoneNumberToCall: this.state.phoneNumberToCall,
      amount: this.state.amount,
    };

    console.log(claim);

    axios
      .post("/v1/claim/create", claim)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="claim">
        <div className="container">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Claim</h1>

            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Policy Number</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Policy Number"
                  name="policyNumber"
                  value={this.state.policyNumber}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Summary</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Please provide a summary"
                  name="summary"
                  value={this.state.summary}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Phone Number To Call</label>
                <input
                  type="phoneNumberToCall"
                  className="form-control"
                  placeholder="Enter phone number which can be called at"
                  name="phoneNumberToCall"
                  value={this.state.phoneNumberToCall}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Amount</label>
                <input
                  type="amount"
                  className="form-control"
                  placeholder="Enter claim amount "
                  name="amount"
                  value={this.state.amount}
                  onChange={this.onChange}
                />
              </div>
              <input
                type="submit"
                className="btn btn-primary btn-lg btn-block mt-4 "
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Claim;
