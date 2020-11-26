import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="col-md-12 text-center">
      <h1 className="display-10 mp-10 align-middle">Welcome</h1>
      <h5 style={{ color: "light-blue" }}>
        {" "}
        What would you like to do today ?{" "}
      </h5>
      <hr></hr>
      <ButtonGroup className="mr-2" aria-label="First group">
        <Button variant="secondary" size="lg">
          <Link style={{ color: "white" }} to="/claim">
            Submit a claim
          </Link>
        </Button>
      </ButtonGroup>
      <ButtonGroup className="mr-2" aria-label="Second group">
        <Button href="/login" variant="primary" size="lg">
          <Link style={{ color: "white" }} to="/claim/status">
            Get Status
          </Link>
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Landing;
