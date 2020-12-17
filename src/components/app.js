import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import BootstrapNavbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <BootstrapNavbar />
        <Footer />
      </div>
    );
  }
}
