import React from "react";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import Home from "../pages/Home";
import Brand from "./Brand";
import Counter from "../pages/Counter";
import Toggle from "../pages/Toggle";
import FontSize from "../pages/FontSize";
import Align from "../pages/Align";
import ShowHide from "../pages/ShowHide";
import Clock from "../pages/Clock";
import ChangeColor from "../pages/ChangeColor";

class BootstrapNavbar extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Brand />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="justify-content-end">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/counter">Counter</Nav.Link>
                    <Nav.Link href="/toggle">Toggle</Nav.Link>
                    <Nav.Link href="/font-size">Font Size</Nav.Link>
                    <Nav.Link href="/align">Align</Nav.Link>
                    <Nav.Link href="/show-hide">Show Hide</Nav.Link>
                    <Nav.Link href="/clock">Clock</Nav.Link>
                    <Nav.Link href="/change-color">Change Color</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/counter">
                  <Counter />
                </Route>
                <Route path="/toggle">
                  <Toggle />
                </Route>
                <Route path="/font-size">
                  <FontSize />
                </Route>
                <Route path="/align">
                  <Align />
                </Route>
                <Route path="/show-hide">
                  <ShowHide />
                </Route>
                <Route path="/clock">
                  <Clock />
                </Route>
                <Route path="/change-color">
                  <ChangeColor />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default BootstrapNavbar;
