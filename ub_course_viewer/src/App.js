import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Search from "./landingPage/Search";
import CourseElement from "./landingPage/CourseElement";
import Cart from "./landingPage/Cart";
import my_cart_class from './landingPage/ShoppingCart';

const my_shopping_cart = new my_cart_class();
// Currently the landing page that holds the Search and courseElement components

function App() {
	return(
		<div>

			<Search></Search>

			<Cart shop_cart={my_shopping_cart}></Cart>

			<CourseElement name="CSE 191" summary="Foundational material for further studies in computer science. Topics include logic, proofs, sets, functions, relations, recursion, recurrence relations, mathematical induction, graphs, trees, basic counting theory, regular languages, and context free grammars." cart={my_shopping_cart}></CourseElement>
			<CourseElement name="CSE 250" summary="Provides a rigorous analysis of the design, implementation, and properties of advanced data structures. Topics include time-space analysis and tradeoffs in arrays, vectors, lists, stacks, queues, and heaps; tree and graph algorithms and traversals, hashing, sorting, and data structures on secondary storage. Surveys library implementations of basic data structures in a high-level language. Advanced data structure implementations are studied in detail. Illustrates the importance of choosing appropriate data structures when solving a problem by programming projects in a high-level language." cart={my_shopping_cart}></CourseElement>


		</div>
    );
}

export default App;
