import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

// Search Bar
// Contains the search bar, cart, and teacher login button

function Search() {
    return (
        <div>
            <Form inline >
				<Form.Group controlId="courseSearchForm" id="courseSearchForm">
					<OverlayTrigger placement="bottom" trigger="click" key="left"
						overlay={
							<Popover id={"popover-positioned-bottom"}>
								<Popover.Title>
									<Form>
										<Form.Group controlId="teacherLogin">
										<Form.Label>Email address</Form.Label>
										<Form.Control type="email" placeholder="Enter email" />

										<Form.Label>Password</Form.Label>
										<Form.Control type="password" placeholder="Password" />
										</Form.Group>

									</Form>
								</Popover.Title>
								<Popover.Content>
									<Button variant="primary" type="submit">
										Submit
									</Button>
								</Popover.Content>
							</Popover>

						}
					>
					<Button variant="secondary">Teacher Login</Button>
					</OverlayTrigger>
					<Form.Label id="courseSearchLabel">Course Search</Form.Label>
					<Form.Control type="course" placeholder="Enter Department and Course Number" />
					<Button variant="primary" type="submit" id="courseSearchFormSubmitButton">Search</Button>
				</Form.Group>
			</Form>
        </div>
    );
}

export default Search;
