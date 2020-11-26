import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Center() {
  return (
    <div className="col-md-12 text-center">
      <h1 className="display-10 mp-10 align-middle">
        Beema Insurance Claims System
      </h1>
      <h5 style={{ color: "light-blue" }}> Welcome To The Claims Center </h5>
      <hr></hr>
      <ButtonGroup className="mr-2" aria-label="First group">
        <Button variant="secondary" size="lg">
          <Link style={{ color: "white" }} to="/register">
            Sign Up
          </Link>
        </Button>
      </ButtonGroup>

      <ButtonGroup className="mr-2" aria-label="Second group">
        <Button href="/login" variant="primary" size="lg">
          <Link style={{ color: "white" }} to="/login">
            Login
          </Link>
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Center;
