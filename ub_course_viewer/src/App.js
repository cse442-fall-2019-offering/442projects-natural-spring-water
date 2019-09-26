import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Search from "./landingPage/Search";
import CourseElement from "./landingPage/CourseElement"

function App() {
	return(
		//Search Bar
		<div>

			<Search></Search>

			<CourseElement name="CSE 191" summary="Foundational material for further studies in computer science. Topics include logic, proofs, sets, functions, relations, recursion, recurrence relations, mathematical induction, graphs, trees, basic counting theory, regular languages, and context free grammars."></CourseElement>
			<CourseElement name="CSE 250" summary="Provides a rigorous analysis of the design, implementation, and properties of advanced data structures. Topics include time-space analysis and tradeoffs in arrays, vectors, lists, stacks, queues, and heaps; tree and graph algorithms and traversals, hashing, sorting, and data structures on secondary storage. Surveys library implementations of basic data structures in a high-level language. Advanced data structure implementations are studied in detail. Illustrates the importance of choosing appropriate data structures when solving a problem by programming projects in a high-level language."></CourseElement>
			
		</div>
    );
}

export default App;
