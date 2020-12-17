import React, { Component } from "react";
import { Navbar, Nav, SplitButton, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">
              <Navbar.Brand href="#home">
                <FontAwesomeIcon icon={faUserFriends} size="2x" color="#61DBFB" className="d-inline-block align-middle" /> James Jager
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="justify-content-end">
                <Nav className="mr-auto">
                  <SplitButton key="up" id="dropdown-button-drop-up" drop="up" variant="secondary" title="About Me" variant="info">
                    <NavDropdown.Item href="https://www.linkedin.com/in/james-jager-a85476162/" target="_blank">
                      <FontAwesomeIcon icon={faLinkedin} color="#0E76A8" /> LinkedIn
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://github.com/Apocilyptica" target="_blank">
                      <FontAwesomeIcon icon={faGithub} color="#bd2c00" /> GitHub
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://www.facebook.com/james.jager" target="_blank">
                      <FontAwesomeIcon icon={faFacebook} color="#3B5998" /> Facebook
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://github.com/Apocilyptica/testProject" target="_blank">
                      <FontAwesomeIcon icon={faFolderOpen} color="#6cc644" /> Source Code
                    </NavDropdown.Item>
                  </SplitButton>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
