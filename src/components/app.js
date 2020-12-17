import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import BootstrapNavbar from "./layouts/Navbar";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <BootstrapNavbar />
      </div>
    );
  }
}
