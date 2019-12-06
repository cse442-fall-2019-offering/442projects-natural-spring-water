import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component} from 'react';
import './App.css';
import LandingPage from "./landingPage/LandingPage";
import Core from "./core/Core"
// Currently the landing page that holds the Search and courseElement components

class App extends Component {
<<<<<<< HEAD
	state = {
		my_shopping_cart: [],
		showLandingPage: true,
		showCore: false,
		graph_viewer: [],
		courses: [],
		searchString: "",
		selectedCourse:{},
		topics: []
	}

	add_course = (courseCode,course) => {
		//triple equals because console wouldnt shut the fuck up about it
		let cart = this.state.my_shopping_cart;
		let graph_courses = this.state.graph_viewer;
		if(cart.indexOf(courseCode) === -1){
			cart.push(courseCode);
			graph_courses.push(course);
		}
		this.setState({my_shopping_cart: cart, graph_viewer: graph_courses});
	}

	remove_course = (courseCode) => {
		let cart = this.state.my_shopping_cart;
		let graph_courses = this.state.graph_viewer;
		var index;
		index = cart.indexOf(courseCode);
		console.log("App.js : remove_course() : index " + index)
		if(index !== -1) {
			cart.splice(index , 1);
			graph_courses.splice(index, 1);
			console.log("App.js : remove_course() : Removed")
		}
		this.setState({my_shopping_cart: cart, graph_viewer: graph_courses})
	}

	getCart = () => {
		return this.state.my_shopping_cart;
	}

	openGraph = () => {
		let cart = this.state.my_shopping_cart;
		let graphCourses = [];
		for(let index =0; index < cart.length; ++index) {
			graphCourses.push(this.findCourse(cart[index]));
		}
		this.setState({graph_viewer:graphCourses});
	}

	findCourse = (courseCode) => {
		let courseList = this.state.courses;
		for(let index=0;index<courseList.length;++index){
			if(courseCode == courseList[index].code){
				return courseList[index];
			}
		}
		return courseList[0];
	}

	openCart = () => {
		//Should redirect to graph page
		return 0;
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

	checkCart = (courseCode) => {
		return (this.my_shopping_cart.indexOf(courseCode) === -1);
	}

	openCourse = (course) =>{
//		this.setState({selectedCourse:course});
		this.add_course(course.code+" - "+course.title ,course);
		//this.openGraph();
	}

	togglePage = () =>{
		console.log("Something happens")
		this.setState({showLandingPage:(!this.state.showLandingPage), showCore:(!this.state.showCore)});
	}

	render() {
		return(
			<div>
				<button onClick={this.togglePage}>Page Swap</button>
				{
					this.state.showLandingPage ?
						<LandingPage onSearch={this.updateSearchString} onAdd={this.add_course} cart={this.getCart} onRemove={this.remove_course} courses={this.getCourseResults()} topics={this.getTopics()} searchString={this.state.searchString} onOpen={this.openCourse} openCart={this.openCart}></LandingPage> : null
				}

				{
					this.state.showCore ?
						<Core cart={this.state.graph_viewer} selectedCourse={this.state.selectedCourse} courseList={this.getCourseResults()} topicList={this.getTopics()}></Core>: null
				}
			</div>
		);
	}
}

export default App;

