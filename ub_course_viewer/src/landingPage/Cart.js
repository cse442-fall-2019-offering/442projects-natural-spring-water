import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

class Cart extends Component {
	render(){


		return(
			<OverlayTrigger rootClose = "True" onEntering={()=>{}} placement="bottom" trigger="click" key="right"
				overlay={
					<Popover id={"popover-positioned-bottom"}>
						<Popover.Title>
							<ul className="list-group" id="my_ui_cart_id">
								{this.getCart().map(course => {
									return <li id={course} class="list-group-item" onClick={() => {this.onRemove(course)}}>{course}</li>
								})}
							</ul>
						</Popover.Title>
						<Popover.Content>
							<Button variant="primary" type="submit">
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
