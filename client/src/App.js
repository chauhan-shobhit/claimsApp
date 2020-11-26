import React from "react";
import Footer from "./components/layout/Footer";
import { NavigationBar } from "./components/layout/NavigationBar";
import Center from "./components/layout/Center";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Claim from "./components/Claim";
import Landing from "./components/Landing";
import ClaimStatus from "./components/ClaimStatus";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Route exact path="/" component={Center} />
        <div className="container"></div>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/claim" component={Claim} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/claim/status" component={ClaimStatus} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
