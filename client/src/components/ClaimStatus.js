import React, { Component } from "react";
import axios from "axios";

class ClaimStatus extends Component {
  constructor() {
    super();
    this.state = {
      claimId: "",
      claimInfoArray: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addClaim = (claiminfo) => {
    this.setState((prevState) => ({
      claiminfoarray: [...prevState.claiminfoarray, claiminfo],
    }));
  };

  onSubmit(e) {
    e.preventDefault();

    //console.log(claim);

    axios
      .get("/v1/claim/?claimID=" + this.state.claimId)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="claim">
        <div className="container">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Claim Status</h1>

            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Claim Number</label>
                <input
                  type="claimId"
                  className="form-control"
                  placeholder="Enter Claim Id"
                  name="claimId"
                  value={this.state.claimId}
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

export default ClaimStatus;
