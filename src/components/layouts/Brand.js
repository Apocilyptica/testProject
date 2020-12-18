import React from "react";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Brand = () => {
  return (
    <div>
      <Navbar.Brand href="/">
        <FontAwesomeIcon icon={faReact} size="2x" color="#61DBFB" className="d-inline-block align-top" /> React Bootstrap
      </Navbar.Brand>
    </div>
  );
};

export default Brand;
