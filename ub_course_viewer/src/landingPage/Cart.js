import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Cart extends Component {
	render(){


		return(
			<OverlayTrigger onEntering={()=>{}} placement="bottom" trigger="click" key="right"
				overlay={
					<Popover id={"popover-positioned-bottom"}>
						<Popover.Title>
							<ul className="list-group" id="my_ui_cart_id">
								{this.getCart().map(course => {
									return <Row noGutters = "true"> <Col xs = {10}> <li id={course} class="list-group-item"> {course} </li> </Col> <Col> <Button style = {{height:"100%", width:"100%"}} variant = "danger" onClick={() => {this.onRemove(course)}}> X </Button>  </Col> </Row>
								})}
							</ul>
						</Popover.Title>
						<Popover.Content>
							<Button variant="primary" onClick={() => {this.props.onToggle()}}>
								Open
							</Button>
						</Popover.Content>
					</Popover>

				}
			>
			<Button id = "cart" controlId = "cart" variant="secondary"> My Cart </Button>
			</OverlayTrigger>

		);
	}

	constructor(props){
		super(props);
		this.state = {courses: props.cart()};
		this.getCart = props.cart;
		this.onRemove = props.onRemove;
		this.print_classes = this.print_classes.bind(this);
		this.print_classes();
	}

	print_classes(){
		console.log("Cart.js: print_classes() " + this.state.courses);
	}
	// hello
}

export default Cart;
