import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import Modal from 'react-bootstrap/Modal';

class EditingModal extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<>
				<Modal show={this.props.show} onHide={this.props.hideModal}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
				</Modal>
			</>
		);
	}

}

export default EditingModal;
