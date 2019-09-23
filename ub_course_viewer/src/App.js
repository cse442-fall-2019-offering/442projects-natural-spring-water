import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function App() {
	return(
		//Search Bar
		<div>

			<Form inline>
				<Form.Group controlId="courseSearchForm" id="courseSearchForm">
					<OverlayTrigger placement="bottom" trigger="click" key="left"
						overlay={
							<Popover id={"popover-positioned-bottom"}>
								<Popover.Title>
									<Form>
										<Form.Group controlId="teacherLogin">
										<Form.Label>Email address</Form.Label>
										<Form.Control type="email" placeholder="Enter email" />

										<Form.Label>Password</Form.Label>
										<Form.Control type="password" placeholder="Password" />
										</Form.Group>

									</Form>
								</Popover.Title>
								<Popover.Content>
									<Button variant="primary" type="submit">
										Submit
									</Button>
								</Popover.Content>
							</Popover>

						}
					>
					<Button variant="secondary">Teacher Login</Button>
					</OverlayTrigger>
					<Form.Label id="courseSearchLabel">Course Search</Form.Label>
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
                        <Card.Body>
							<Container>
								<Row>
									<Col sm={8}>Foundational material for further studies in computer science. Topics include logic, proofs, sets, functions, relations, recursion, recurrence relations, mathematical induction, graphs, trees, basic counting theory, regular languages, and context free grammars.</Col>
									<Col sm={4}>
										<Container>
											<Row style={{marginBottom: 1}}>
												<Col> <Button type="submit">Topics</Button> </Col>
												<Col> <Button type="submit">Add</Button> </Col>
											</Row>
											<Row style={{marginBottom: 1}}>
												<Col> <Button type="submit">Edit</Button> </Col>
												<Col> <Button type="submit">Open</Button> </Col>
											</Row>
										</Container>
									</Col>
								</Row>
							</Container>
						</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
			<Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        CSE 250
                     </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
							<Container>
								<Row>
									<Col sm={8}>Provides a rigorous analysis of the design, implementation, and properties of advanced data structures. Topics include time-space analysis and tradeoffs in arrays, vectors, lists, stacks, queues, and heaps; tree and graph algorithms and traversals, hashing, sorting, and data structures on secondary storage. Surveys library implementations of basic data structures in a high-level language. Advanced data structure implementations are studied in detail. Illustrates the importance of choosing appropriate data structures when solving a problem by programming projects in a high-level language.</Col>
									<Col sm={4}>
										<Container>
											<Row style={{marginBottom: 1}}>
												<Col> <Button type="submit">Topics</Button> </Col>
												<Col> <Button type="submit">Add</Button> </Col>
											</Row>
											<Row style={{marginBottom: 1}}>
												<Col> <Button type="submit">Edit</Button> </Col>
												<Col> <Button type="submit">Open</Button> </Col>
											</Row>
										</Container>
									</Col>
								</Row>
							</Container>
						</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
		</div>
    );
}

export default App;
