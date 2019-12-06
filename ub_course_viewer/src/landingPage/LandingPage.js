import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import '../App.css';
import Search from "./Search";
import CourseElement from "./CourseElement"
import Cart from "./Cart"

class LandingPage extends Component{
	state = {
		isLoggedIn:false,
	}

	constructor(props){
		super(props);
	}

	changeLoginState = (my_bool) => {
		this.setState({isLoggedIn: my_bool});
	}

	render(){
		return (
			<>
				<Search loginState={this.state.isLoggedIn} changeLoginState={this.changeLoginState} onSearch={this.props.onSearch} cart={this.props.cart} onRemove={this.props.onRemove} onToggle={this.props.onToggle}></Search>

				{this.props.courses.map(course => {
					return <CourseElement isLoggedIn={this.state.isLoggedIn} topics={this.props.topics} name={course.code+" - "+course.title} summary={course.summary} onAdd={this.props.onAdd} searchString={this.props.searchString} courseObj={course} onOpen={this.props.onOpen} />
				})}
			</>
		);
	}
}

export default LandingPage;
