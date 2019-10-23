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

            <Search></Search>

            <Cart shop_cart={props.cart}></Cart>

            <CourseElement name="CSE 191" summary="Foundational material for further studies in computer science. Topics include logic, proofs, sets, functions, relations, recursion, recurrence relations, mathematical induction, graphs, trees, basic counting theory, regular languages, and context free grammars." cart={props.cart}></CourseElement>
            <CourseElement name="CSE 250" summary="Provides a rigorous analysis of the design, implementation, and properties of advanced data structures. Topics include time-space analysis and tradeoffs in arrays, vectors, lists, stacks, queues, and heaps; tree and graph algorithms and traversals, hashing, sorting, and data structures on secondary storage. Surveys library implementations of basic data structures in a high-level language. Advanced data structure implementations are studied in detail. Illustrates the importance of choosing appropriate data structures when solving a problem by programming projects in a high-level language." cart={props.cart}></CourseElement>
            
        </div>
    );
}

export default LandingPage;
