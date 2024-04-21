import './style.css';

import React from 'react';
import Sidebar from './sidebar/sidebar-component'; // Adjust the import path according to your file structure
import Header from './header/header-component'; // Adjust the import path according to your file structure
import { Outlet } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Row className="flex-nowrap">
        <Sidebar />
        <Col xs={10} className="content-area">
            <Outlet />
        </Col>
        <Col xs={10} style={{ marginLeft: '250px' }}>
          {/* Adjusting marginLeft to prevent sidebar from covering the content */}
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

export default MainLayout;
