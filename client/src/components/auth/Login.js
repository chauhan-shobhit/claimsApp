import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();

    const login = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("/v1/user/login", login)

      .then((res) => this.props.history.push("/landing")) //console.log(res.data))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Login</h1>
            <p className="lead text-center">Login to your Beema account</p>
            <form onSubmit={this.onSubmit}>
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

export default Login;
