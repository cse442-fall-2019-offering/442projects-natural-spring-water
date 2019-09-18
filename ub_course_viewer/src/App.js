import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function App() {
	return(
		//Search Bar
		<div>
			<Form inline>
				<Form.Group controlId="courseSearchForm" id="courseSearchForm">
					<Form.Label>Course Search</Form.Label>
					<Form.Control type="course" placeholder="Enter Department and Course Number" />
					<Button variant="primary" type="submit" id="courseSearchFormSubmitButton">Search</Button>
				</Form.Group>
			</Form>
			
			<Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        CSE 191
                     </Accordion.Toggle>
             
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Test</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
			<Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        CSE 250
                     </Accordion.Toggle>
             
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Test</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
		</div>
    );
}

export default App;