import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Facturation</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/compagnies">Compagnies</Nav.Link>
              <Nav.Link href="/clients">client</Nav.Link>
              <Nav.Link href="/accountants">Accountant</Nav.Link>
              <Nav.Link href="/compagnies-ajout">Ajout d'une compagnie</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


      </header>
      <main>
        <Container>
          {children}
        </Container>
      </main>
      {/* <footer>Joli footer</footer> */}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
