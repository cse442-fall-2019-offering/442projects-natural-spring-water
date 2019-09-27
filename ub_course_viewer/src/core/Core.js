import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from '../landingPage/Search';

function Core(){
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={1}>Home Page Button</Col>
                    <Col><Search></Search></Col>
                </Row>
                <Row>
                    <Col>Course List</Col>
                    <Col>Core Viewer</Col>
                    <Col>Cart</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Core;