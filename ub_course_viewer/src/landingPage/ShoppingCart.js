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
	}

	add_course(courseCode){
		//triple equals because console wouldnt shut the fuck up about it
		if(this.state.course_list.indexOf(courseCode) === -1){
			this.state.course_list.push(courseCode);
			console.log("ShoppingCartJS: Added " + courseCode + " to cart which is now " + this.state.course_list);
		}
	}

	get_courses(){
		return this.state.course_list;
	}
}

export default ShoppingCart;
