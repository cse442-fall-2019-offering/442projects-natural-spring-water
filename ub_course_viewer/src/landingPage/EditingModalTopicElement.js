import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

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
                    {this.props.topic_desc}
					{
						this.state.is_associated ?
						<Button onClick={()=>{this.setState({is_associated: false});this.props.remove_from_cart(this.props.topic_id)}} variant="secondary">Remove</Button>
						: <Button onClick={()=>{this.setState({is_associated: true});this.props.add_to_cart(this.props.topic_id)}} variant="success">Add</Button>
					}
				</ListGroup.Item>
			</>
		);
	}

}

export default EditingModalTopicElement;
