import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
	return(
		//Search Bar
		<Form inline>
			<Form.Group controlId="courseSearchForm" id="courseSearchForm">
				<Form.Label>Course Search</Form.Label>
				<Form.Control type="course" placeholder="Enter Department and Course Number" />
				<Button variant="primary" type="submit" id="courseSearchFormSubmitButton">Search</Button>
			</Form.Group>
		</Form>
    );
}

export default App;
