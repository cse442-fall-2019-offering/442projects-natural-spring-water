import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import EditingModalTopicElement from './EditingModalTopicElement';

class EditingModal extends Component{

	state = {
		topics: [],
		associated_topics: [],
		editing_cart: [],
		new_topic_cart: []
	}

	constructor(props){
		super(props);
	}

    processResponse = (response) => {
        var processed_response = response.replace(/\\/g, "");
		processed_response = processed_response.replace(/\"{/g, "{");
		processed_response = processed_response.replace(/}\"/g, "}");
        return processed_response;
    }

    setupTopics = (response) => {
        var processed_response = this.processResponse(response);
        this.setState({topics: JSON.parse(processed_response)});
    }

	setupAssociatedTopics = (response) => {
		if(response === "failed"){
			// do nothing
		}else{
			this.setState({associated_topics: response.split(",")});
			this.setState({editing_cart: response.split(",")});
		}
	}

	getAssociatedTopics = (my_callback) =>{
		var xhttp = new XMLHttpRequest();
		xhttp.open("POST", 'https://www-student.cse.buffalo.edu/CSE442-542/2019-Fall/cse-442n/build/associated-topics.php', true);
		xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhttp.onreadystatechange = function() {
			if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
				my_callback(xhttp.responseText);
			}
		}
		var code = this.props.name.substring(0, 7);
		xhttp.send("code=" + code);
	}

    getTopics(my_callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                my_callback(xhttp.responseText);
            }
        };
        xhttp.open("GET", "https://www-student.cse.buffalo.edu/CSE442-542/2019-Fall/cse-442n/build/topics.php", true);
        xhttp.send();
    }

	addToCart = (topicID) => {
		var new_cart = this.state.editing_cart.concat([topicID]);
		this.setState({editing_cart: new_cart});
	}

	removeFromCart = (topicID) => {
		var new_cart = this.state.editing_cart.filter((curr)=>{
			return curr != topicID;
		});
		this.setState({editing_cart: new_cart});
	}

	updateTopics = () => {
		if(this.props.isLoggedIn===true){

		var num_new_topics = this.state.new_topic_cart.length;
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", 'https://www-student.cse.buffalo.edu/CSE442-542/2019-Fall/cse-442n/build/update-topics.php', true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
				console.log(xhttp.responseText);
                if(xhttp.responseText === "success"){
					if(num_new_topics === 0){
                    	window.location.reload(true);
					}
                }
            }
        }
        var code = this.props.name.substring(0, 7);
        xhttp.send("code=" + code + "&" + "associated=" + this.state.editing_cart.join(","));

		var len = this.state.topics.length;
		this.state.new_topic_cart.forEach(function(topicName, index, arr){
			var add_topic_xhttp = new XMLHttpRequest();
			add_topic_xhttp.open("POST", 'https://www-student.cse.buffalo.edu/CSE442-542/2019-Fall/cse-442n/build/add-topic.php', true);
			add_topic_xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			add_topic_xhttp.onreadystatechange = function() {
				if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
					if(add_topic_xhttp.responseText === "success"){
						if(index === arr.length-1){
							window.location.reload(true);
						}else{
							setTimeout(function(){}, 10);
						}
					}
				}
			}
			add_topic_xhttp.send("id="+ (len+index+1)+ "&" +"topic=" + topicName);
		});

		//close if
		}
	}

	addTopic = () => {
		var topicName = prompt("Enter a Topic Name");
		if (topicName !== null){
			var len = this.state.new_topic_cart.length;
			if(this.state.new_topic_cart.includes(topicName) === false){
				this.setState({new_topic_cart: this.state.new_topic_cart.concat(topicName)});
				this.addToCart(this.state.topics.length + len + 1);
			}
		}
	}

	componentDidMount(){
		this.getTopics(this.setupTopics);
		this.getAssociatedTopics(this.setupAssociatedTopics);
	}

	render(){
		return(
			<>
				<Modal show={this.props.show} onHide={this.props.hideModal}>

					<Modal.Header closeButton>
						<Modal.Title>{this.props.name}</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						Select the Topics You'd Like to Add/Remove
					</Modal.Body>

					<Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}} >
						<ListGroup>
							{this.state.topics.map(topic => {
								if (this.state.associated_topics.indexOf(topic["topic_id"]) > -1){
									return <EditingModalTopicElement topic_id={topic["topic_id"]} topic_desc={topic["topic_desc"]} associated={true} add_to_cart={this.addToCart} remove_from_cart={this.removeFromCart}></EditingModalTopicElement>
								}else{
									return <EditingModalTopicElement topic_id={topic["topic_id"]} topic_desc={topic["topic_desc"]} associated={false} add_to_cart={this.addToCart} remove_from_cart={this.removeFromCart}></EditingModalTopicElement>
								}
							})}
						</ListGroup>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="warning" onClick={this.addTopic}>Add a New Topic</Button>

						<Button variant="secondary" onClick={this.props.hideModal}>
							Close
						</Button>
						<Button variant="primary" onClick={this.updateTopics}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}

}

export default EditingModal;
