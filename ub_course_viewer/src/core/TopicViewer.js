import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';

class TopicViewer extends Component{
	state = {
	
	}

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<Card.Title>{this.props.topic.topic_desc}</Card.Title>
						<Card.Subtitle className="mb-2 textmuted">Topic</Card.Subtitle>
						<Card.Text>{this.props.topic.topic_info}</Card.Text>
					</Card.Body>
				</Card>
			</div>
		);
	}
}


export default TopicViewer;
