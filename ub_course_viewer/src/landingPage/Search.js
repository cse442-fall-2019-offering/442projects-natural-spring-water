import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Cart from './Cart';
import Login from './Login';
// Search Bar
// Contains the search bar, cart, and teacher login button

class Search extends Component {
	state = {
		searchString:""
	}
	onChangeSearchString = (newSearch) => {
		this.setState({searchString: newSearch});
	}
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Form inline id="courseSearchForm">
						<Login isLoggedIn={this.props.loginState} changeLoginState={this.props.changeLoginState}></Login>
						<Form.Label id="courseSearchLabel">Course Search</Form.Label>
						<Form.Control type="course" placeholder="Enter Department and Course Number" onChange={event => this.onChangeSearchString(event.target.value)}/>
						<Button variant="primary" type="button" id="courseSearchFormSubmitButton" onClick={()=>this.props.onSearch(this.state.searchString)} >Search</Button>
						<Cart cart={this.props.cart} onRemove={this.props.onRemove} openCart={this.props.openCart}></Cart>
				</Form>
			</div>
		);
	} 
}

export default Search;
