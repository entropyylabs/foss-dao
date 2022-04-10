import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Nav() {
  return (
    <div>
      <Navbar className="navbar-bg">
        <Container>
          <Navbar.Brand className="nav-title"></Navbar.Brand>
          <Form className="d-flex">
            <Button className="nav-btn" style={{ background: "#000" }}>
              Create
            </Button>
            <Button
              style={{ background: "#fff", color: "#000" }}
              className="nav-btn"
            >
              0
            </Button>
            <sw-auth
              partner-key="ea0228b758de2599fbc12796f422222066e48c72"
              use-dev="true"
            ></sw-auth>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default Nav;
