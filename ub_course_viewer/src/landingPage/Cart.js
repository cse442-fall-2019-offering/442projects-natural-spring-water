import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

class Cart extends Component {
	render(){


		return(
			<OverlayTrigger onExit={()=>{this.remove_rendered_courses()}} onEntered={()=>{this.render_courses()}} placement="bottom" trigger="click" key="right"
				overlay={
					<Popover id={"popover-positioned-bottom"}>
						<Popover.Title>
							<ul className="list-group" id="my_ui_cart_id">

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
		this.state = {courses: props.shop_cart.get_courses()};
		this.print_classes = this.print_classes.bind(this);
		this.render_courses = this.render_courses.bind(this);
		this.remove_rendered_courses = this.remove_rendered_courses.bind(this);
	}

	print_classes(){
		console.log("Cart.js: print_classes() " + this.state.courses);
	}

	render_courses(){
		console.log("Cart.js: render_courses()");
		var unordered_list = document.getElementById("my_ui_cart_id");
		this.state.courses.forEach(element => {
			var node = document.createElement("LI");
			var textnode = document.createTextNode(element);
			var att = document.createAttribute("class");
			att.value = "list-group-item";
			node.appendChild(textnode);
			node.setAttributeNode(att);
			unordered_list.appendChild(node);
		});
	}

	remove_rendered_courses(){
		console.log("Cart.js: remove_rendered_courses()");
		var list = document.getElementById("my_ui_cart_id");
		while(list.length > 0){
			list.removeChild(list.childNodes[0]);
		}
	}


}

export default Cart;
