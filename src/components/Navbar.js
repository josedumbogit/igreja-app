import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar as BsNavbar, NavDropdown, Container } from 'react-bootstrap';

function Navbar() {
  return (
    <BsNavbar bg="dark" variant="dark" expand="lg" className="flex-column vh-100 p-3" style={{ minWidth: '250px' }}>
      <Container>
        <BsNavbar.Brand href="/">Igreja App</BsNavbar.Brand>
        <Nav className="flex-column mt-4 w-100">
          <NavDropdown title="Membros" id="membros-dropdown">
            <NavDropdown.Item as={Link} to="/membros/novo">Novo</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/membros/ver">Ver</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;