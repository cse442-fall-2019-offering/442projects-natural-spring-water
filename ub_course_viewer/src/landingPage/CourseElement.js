import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../App.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CourseElement (classProps) {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        {classProps.name}
                     </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
							<Container>
								<Row>
									<Col sm={8}>{classProps.summary}</Col>
									<Col sm={4}></Col>
								</Row>
								<p> </p>
								<Container>
									<Row style={{marginBottom: 1}}>
										<ButtonGroup>
											<Button variant = "outline-primary" type="submit">Topics</Button>
											<Button variant = "outline-primary" type="submit">Add</Button>
											<Button variant = "outline-primary" type="submit">Edit</Button>
											<Button variant = "outline-primary" type="submit">Open</Button>
										</ButtonGroup>
									</Row>
								</Container>
							</Container>
						</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

export default CourseElement;