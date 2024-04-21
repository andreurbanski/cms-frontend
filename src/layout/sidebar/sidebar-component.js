import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <div style={{width: '250px', height: '100vh', position: 'fixed'}}>
            <Nav defaultActiveKey="/home" className="flex-column bg-light" >
                <Nav.Link href="#" className="text-dark"><u>Administração</u></Nav.Link>
                <Nav.Link href="/admin/users" className="text-dark">Usuarios</Nav.Link>
                <Nav.Link href="/blog" className="text-dark"><u>Operação</u></Nav.Link>
                <Nav.Link href="#" className="text-dark">Execução Condominial</Nav.Link>
                <Nav.Link href="#" className="text-dark">TJSP</Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;
