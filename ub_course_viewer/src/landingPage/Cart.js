import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import cartFunc from "./cartFunctions"

class Cart extends Component {
	render(){


		return(
			<OverlayTrigger onEntering={()=>{this.render_courses()}} placement="bottom" trigger="click" key="right"
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
		this.state = {courses: props.shop_cart};
		this.print_classes = this.print_classes.bind(this);
		this.render_courses = this.render_courses.bind(this);
		this.remove_course = this.remove_course.bind(this);
		this.render_courses();
		this.print_classes();
	}

	print_classes(){
		console.log("Cart.js: print_classes() " + this.state.courses);
	}
	// hello
	render_courses(){
		console.log("Cart.js: render_courses()");
		var unordered_list = document.getElementById("my_ui_cart_id");
		this.state.courses.forEach(element => {
			var isListed = false;
			var i;
			console.log(unordered_list)
			for(i = 0; i < unordered_list.length; i++) {
				if(unordered_list[i].getAttribute("id").equals(element)) {
					console.log(unordered_list)
					isListed = true;
					break;
				}
			}
			
			if(isListed === false) {
				var node = document.createElement("LI");
				var textnode = document.createTextNode(element);
				var att = document.createAttribute("class");
				att.value = "list-group-item";
				node.setAttribute("id", element); 
				node.onclick = ()=>{this.remove_course(element)};
				node.appendChild(textnode);
				node.setAttributeNode(att);
				unordered_list.appendChild(node);
			}
		});
	}
	
	remove_course(element) {
		// Pass remove request to backend
		cartFunc.remove_course(element,this.state.courses);
		console.log(this.state.courses);
		
		// Remove in UI
		var unordered_list = document.getElementById("my_ui_cart_id");
		console.log(unordered_list.childNodes);
		for(var i = 0; i < unordered_list.childNodes.length; i++) {
			if(unordered_list.childNodes[i].id === element) {
				unordered_list.removeChild(unordered_list.childNodes[i]);
			}
		}
	}

}

export default Cart;
