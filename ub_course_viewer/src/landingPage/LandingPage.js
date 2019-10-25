import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../App.css';
import Search from "./Search";
import CourseElement from "./CourseElement"
import Cart from "./Cart"

// Currently the landing page that holds the Search and courseElement components

function LandingPage(props) {
	return(
        <div>

            <Search onSearch={props.onSearch} cart={props.cart} onRemove={props.onRemove}></Search>

            {props.courses.map(course => {
                return <CourseElement name={course.code+" - "+course.title} summary={course.summary} onAdd={props.onAdd} searchString={props.searchString} courseObj={course} onOpen={props.onOpen}/>
            })}

            
        </div>
    );
}

export default LandingPage;
