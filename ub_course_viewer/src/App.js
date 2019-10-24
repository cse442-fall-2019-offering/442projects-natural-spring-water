import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component} from 'react';
import './App.css';
import LandingPage from "./landingPage/LandingPage";
import Core from "./core/Core"

// Currently the landing page that holds the Search and courseElement components

class App extends Component {
	state = {
		my_shopping_cart: [],
		showLandingPage: true,
		showCore: true,
		myAPIResponse: []
	}

	add_course = (courseCode) => {
		//triple equals because console wouldnt shut the fuck up about it
		let cart = this.state.my_shopping_cart;
		if(cart.indexOf(courseCode) === -1){
			cart.push(courseCode);
			console.log("App.js: Added " + courseCode + " to cart which is now " + cart);
		}
		this.setState({my_shopping_cart: cart});
	}

	remove_course = (courseCode) => {
		let cart = this.state.my_shopping_cart;
		var index;
		index = cart.indexOf(courseCode);
		
		console.log("App.js : remove_course() : index " + index)
		if(index !== -1) {
			cart.splice(index , 1);
			console.log("App.js : remove_course() : Removed")
		}
		this.setState({my_shopping_cart: cart})
	}

	getCart = () => {
		console.log(this.state.my_shopping_cart)
		return this.state.my_shopping_cart;
	}

	callAPI() {
	    fetch("http://localhost:9000/myAPI")
	        .then(res => res.text())
			.then(res => this.setState({ myAPIResponse: JSON.parse(res) }));
			
	}

	componentWillMount() {
		this.callAPI();
	}

	render() {
		return(
			<div>
				{ 
					this.state.showLandingPage ?
						<LandingPage onAdd={this.add_course} cart={this.getCart} onRemove={this.remove_course}></LandingPage> : null
				}
				{ 
					this.state.showCore ? 
						<Core cart={this.state.my_shopping_cart}></Core>: null
				}
				<button onClick={()=>{console.log(this.state.myAPIResponse)}}>Backend</button>
			</div>
		);
	}
}


export default App;
