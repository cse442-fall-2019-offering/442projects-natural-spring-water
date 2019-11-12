import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component} from 'react';
import './App.css';
import LandingPage from "./landingPage/LandingPage";
import Core from "./core/Core"
import axios from 'axios';
// Currently the landing page that holds the Search and courseElement components

class App extends Component {
	state = {
		my_shopping_cart: [],
		showLandingPage: true,
		showCore: true,
		graph_viewer: [],
		myAPIResponse: [],
		searchString: "",
		selectedCourse:{}
	}

	add_course = (courseCode) => {
		//triple equals because console wouldnt shut the fuck up about it
		let cart = this.state.my_shopping_cart;
		if(cart.indexOf(courseCode) === -1){
			cart.push(courseCode);
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
		return this.state.my_shopping_cart;
	}

	openGraph = () => {
		let cart = this.state.my_shopping_cart;
		this.setState({graph_viewer: cart});
	}

	setmyAPIResponse = (response) => {
		this.setState({myAPIResponse: JSON.parse(response)});
	}

	callAPI(my_callback) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				console.log("Non-JSON-Parsed: "+xhttp.responseText);
				var processed_responseText = xhttp.responseText;
				console.log("JSON-Parsed: "+JSON.parse(xhttp.responseText));
				processed_responseText = processed_responseText.replace(/\\/g, "");
				my_callback(processed_responseText);
			}
		};
		xhttp.open("GET", "https://www-student.cse.buffalo.edu/CSE442-542/2019-Fall/cse-442n/build/index_0.php", true);
		xhttp.responseType = "text";
		xhttp.send();
	}

	componentDidMount() {
		this.callAPI(this.setmyAPIResponse);
	}

	getCourseResults = () => {
		return this.state.myAPIResponse;
	}

	updateSearchString = (newSearch) => {
		this.setState({searchString: newSearch});
	}

	openCourse = (course) =>{
		this.setState({selectedCourse:course});
	}
	render() {
		return(
			<div>
				{
					this.state.showLandingPage ?
						<LandingPage onSearch={this.updateSearchString} onAdd={this.add_course} cart={this.getCart} onRemove={this.remove_course} courses={this.getCourseResults()} searchString={this.state.searchString} onOpen={this.openCourse}></LandingPage> : null
				}
				{
					this.state.showCore ?
						<Core cart={this.state.my_shopping_cart} selectedCourse={this.state.selectedCourse} courseList={this.getCourseResults()}></Core>: null
				}
			</div>
		);
	}
}


export default App;
