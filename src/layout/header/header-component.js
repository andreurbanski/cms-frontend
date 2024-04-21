import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Container fluid>
                <Navbar.Brand href="#" className="text-dark">
                   CRM
                </Navbar.Brand>
                {/* Optionally, you can add more elements to your header here, like navigation links, buttons, etc. */}
            </Container>
        </Navbar>
    );
};

export default Header;
