import {Component} from 'react';

class ShoppingCart extends Component {
	render(){
		return;
	}

	constructor(props){
		super(props);
		this.state={course_list:[]};
		this.add_course = this.add_course.bind(this);
		this.get_courses = this.get_courses.bind(this);
		this.remove_course = this.remove_course.bind(this);
	}

	add_course(courseCode){
		//triple equals because console wouldnt shut the fuck up about it
		if(this.state.course_list.indexOf(courseCode) === -1){
			this.state.course_list.push(courseCode);
			console.log("ShoppingCartJS: Added " + courseCode + " to cart which is now " + this.state.course_list);
		}
	}
	
	remove_course(courseCode) {
		var index;
		// var i;
		
		index = this.state.course_list.indexOf(courseCode);
		// for(i = 0; i < this.state.course_list.length; i++) {
		// 	console.log("ShoppingCart.js : remove_course() : courseCode : " + courseCode);
		// 	console.log("ShoppingCart.js : remove_course() : courseInList : " + this.state.course_list[i]);
		// 	if(courseCode === this.state.course_list[i]) {
		// 		index = i;
		// 		break;
		// 	}
		// }
		
		console.log("ShoppingCart.js : remove_course() : index " + index)
		if(index !== -1) {
			this.state.course_list.splice(index , 1);
			console.log("ShoppingCart.js : remove_course() : Removed")
		}
	}

	get_courses(){
		return this.state.course_list;
	}
}

export default ShoppingCart;
