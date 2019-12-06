import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class TopicModal extends Component {

	state = {
		topics: [],
		associated_topics: []
	}

	constructor(props) {
		super(props);
	}

	render(){
                return(
                        <>
                                <Modal centered  show={this.props.show} onHide={this.props.hideModal}>

                                        <Modal.Header closeButton>
                                                <Modal.Title>{this.props.course.code + " - " + this.props.course.title}</Modal.Title>
                                        </Modal.Header>

                                        <Modal.Body>
						
                                                Topics Related to This Course
						<div>	
							{
								this.props.topics.map(topic => {
									if (this.props.course["associated_topics"].indexOf(parseInt(topic["topic_id"], 10)) > -1) {
										console.log(topic["topic_desc"]);
										return <Accordion>
                                                        <Card>
                                                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                                                        {topic["topic_desc"]}
                                                                        </Accordion.Toggle>

                                                                <Accordion.Collapse eventKey="0">
                                                                        <Card.Body>
                                                                                <Container>
                                                                                        <Row>
                                                                                                <Col sm={8}>Hello</Col>
                                                                                                <Col sm={4}></Col>
                                                                                        </Row>
                                                                                        <p> </p>
                                                                                </Container>
                                                                        </Card.Body>
                                                                </Accordion.Collapse>
                                                        </Card>
                                                </Accordion>

									}
								})
							}
						</div>
                                        </Modal.Body>

                                        <Modal.Footer>
                                                <Button variant="secondary" onClick={this.props.hideModal}>
                                                        Close
                                                </Button>
                                        </Modal.Footer>
                                </Modal>
                        </>
                );
        }

}

export default TopicModal;
