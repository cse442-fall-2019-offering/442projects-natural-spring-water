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
	
	callAPI() {
	    fetch("http://localhost:9000/myAPI")
	        .then(res => res.text())
			.then(res => this.setState({ myAPIResponse: JSON.parse(res) }));
			
	}

	componentWillMount() {
		this.callAPI();
	}

	getCourseResults = () => {
		if(this.state.myAPIResponse.length == 0) {
			return this.state.myAPIResponse;
		}
		
		return this.state.myAPIResponse[0];
	}
	
	getTopics = () => {	
		if(this.state.myAPIResponse.length == 0) {
			return this.state.myAPIResponse;
		}
		
		return this.state.myAPIResponse[1];
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
						<LandingPage onSearch={this.updateSearchString} onAdd={this.add_course} cart={this.getCart} onRemove={this.remove_course} courses={this.getCourseResults()} topics={this.getTopics()} searchString={this.state.searchString} onOpen={this.openCourse}></LandingPage> : null
				}
				{ 
					this.state.showCore ? 
						<Core cart={this.state.my_shopping_cart} selectedCourse={this.state.selectedCourse} courseList={this.getCourseResults()} topicList={this.getTopics()}></Core>: null
				}
			</div>
		);
	}
}

export default App;
