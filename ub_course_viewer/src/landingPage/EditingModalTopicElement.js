import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class EditingModalTopicElement extends Component{

	state = {
		is_associated: this.props.associated,
	}

	constructor(props){
		super(props);
	}

	render(){
		return(
			<>
				<ListGroup.Item>
					{
						this.state.is_associated ?
						<Row noGutters = "true"> <Col xs = {9}> <li class="list-group-item"> {this.props.topic_desc} </li> </Col> <Col> <Button style={{width:"100%",height:"100%"}} onClick={()=>{this.setState({is_associated: false});this.props.remove_from_cart(this.props.topic_id)}} variant="secondary">Remove</Button> </Col> </Row>
						: <Row noGutters = "true"> <Col xs = {10}> <li class="list-group-item"> {this.props.topic_desc} </li> </Col> <Col> <Button style={{width:"100%",height:"100%"}} onClick={()=>{this.setState({is_associated: true});this.props.add_to_cart(this.props.topic_id)}} variant="success">Add</Button> </Col> </Row>
					}
				</ListGroup.Item>
			</>
		);
	}

}

export default EditingModalTopicElement;
