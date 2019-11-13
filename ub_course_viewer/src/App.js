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
		courses: [],
		searchString: "",
		selectedCourse:{},
		topics: []
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

	processResponse = (response) => {
		var processed_response = response.replace(/\\/g, "");
                processed_response = processed_response.replace(/\"{/g, "{");
                processed_response = processed_response.replace(/}\"/g, "}");
		console.log(processed_response);
		return processed_response;
	}

	courseTopicsToIntArr = course => {
		if(course.associated_topics==null) return [];
		course.associated_topics = course.associated_topics.split(",").map(Number);
		return course;
	}

	processTopicsInCourse = (courseList) => {
		var temp_courses = courseList;
		temp_courses = temp_courses.map(this.courseTopicsToIntArr);
		return temp_courses;
	}

	setCourses = (response) => {
		var processed_response = this.processResponse(response);
		this.setState({courses: this.processTopicsInCourse(JSON.parse(processed_response))});
//		this.setState({courses: this.processTopicsInCourse(this.state.courses)});
	}

	setTopics = (response) => {
		var processed_response = this.processResponse(response);
		this.setState({topics: JSON.parse(processed_response)});
		console.log(this.state.topics[0]);
	}

	callAPI(my_callback, phpFile) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				//console.log("Non-JSON-Parsed: "+xhttp.responseText);
				//console.log("JSON-Parsed: "+JSON.parse(xhttp.responseText));
				my_callback(xhttp.responseText);
			}
		};
		xhttp.open("GET", "https://www-student.cse.buffalo.edu/CSE442-542/2019-Fall/cse-442n/build2/"+phpFile , true);
		xhttp.send();
	}

	componentDidMount = () => {
		this.callAPI(this.setCourses,"index_0.php");
		this.callAPI(this.setTopics,"topics.php");
		console.log(this.state.courses);
		console.log(this.state.topics);
	}

	getCourseResults = () => {
		return this.state.courses;
	}

	getTopics = () => {
		return this.state.topics;
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
