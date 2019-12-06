import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import '../App.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopicModal from './TopicModal';

//CourseElement
//props is the parameter that takes in values for the name of the class and class summary
//basic layout for a course element on the landing page

class CourseElement extends Component {

	state = {
		showTopicModal: false
	}

	showTopicModal = () => {
		this.setState({showTopicModal: true});
	}
	
	hideTopicModal = () => {
		this.setState({showTopicModal: false});
	}

	constructor(props){
		super(props);
	}

	compareSearchStrings = (userInput, courseTitle) => {
		return (courseTitle.toLowerCase().indexOf(userInput.toLowerCase().trim()) === -1) ? false : true;
	}
	
	render(){
		return(
			<div>
				{
					this.compareSearchStrings(this.props.searchString, this.props.name) ? 
					<div>
						<Accordion defaultActiveKey="0">
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="0">
									{this.props.name}
									</Accordion.Toggle>

								<Accordion.Collapse eventKey="0">
									<Card.Body>
										<Container>
											<Row>
												<Col sm={8}>{this.props.summary}</Col>
												<Col sm={4}></Col>
											</Row>
											<p> </p>
											<Container>
												<Row style={{marginBottom: 1}}>
													<ButtonGroup>
														<Button variant = "outline-primary" onClick = {() => {this.showTopicModal();} } type = "button"> Topics </Button>
														<Button variant = "outline-primary" onClick={ ()=>{this.props.onAdd(this.props.name,this.props.courseObj)} } type="button">Add</Button>
														<Button variant = "outline-primary" type="submit">Edit</Button>
														<Button variant = "outline-primary" onClick={ ()=>{this.props.onOpen(this.props.courseObj)} } type="button">Open</Button>
													</ButtonGroup>
												</Row>
											</Container>
										</Container>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
						<TopicModal show = {this.state.showTopicModal} hideModal = {this.hideTopicModal} course = {this.props.courseObj} topics = {this.props.topics}> </TopicModal> 
					</div>:null
				}
				
			</div>
		);
	}
}

export default CourseElement;
