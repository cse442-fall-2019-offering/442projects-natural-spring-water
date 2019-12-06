import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Cart from './Cart';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
			<div id="courseSearchForm">
				<Row>
						<Col lg={1.5} xl={1.5}>
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
										<Button variant="primary" type="button">
											Submit
										</Button>
									</Popover.Content>
								</Popover>

							}
						>
						<Button variant="secondary">Teacher Login</Button>
						</OverlayTrigger>
						</Col>

						<Col>
						<Form inline>
						<Form.Label id="courseSearchLabel">Course Search</Form.Label>
						<Form.Control style={{width:"80%"}} type="course" placeholder="Enter Department and Course Number" onChange={event => this.onChangeSearchString(event.target.value)}/>
						</Form>
						</Col>

						<Col lg={1} xl={1}>
						<Button variant="primary" type="button" id="courseSearchFormSubmitButton" onClick={()=>this.props.onSearch(this.state.searchString)} >Search</Button>
						</Col>

						<Col lg={2} xl={2}>
						<Cart cart={this.props.cart} onRemove={this.props.onRemove}></Cart>
						</Col>
				</Row>
			</div>
		);
	}
}

export default Search;
