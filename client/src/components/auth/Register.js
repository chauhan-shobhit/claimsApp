import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      policyNumber: "",
      email: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      policyNumber: this.state.policyNumber,
      email: this.state.email,
      password: this.state.password,
    };

    console.log(newUser);

    axios
      .post("/v1/user/register", newUser)

      .then((res) => this.props.history.push("/login")) //console.log(res.data))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your Beema account</p>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Policy Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter password"
                  name="policyNumber"
                  value={this.state.policyNumber}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Email address</label>
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
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
