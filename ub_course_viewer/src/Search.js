import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

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
					
					<OverlayTrigger placement="bottom" trigger="click" key="right"
						overlay={
							<Popover id={"popover-positioned-bottom"}>
								<Popover.Title>
									<ul class="list-group">
									  <li class="list-group-item">CSE 191</li>
									  <li class="list-group-item">CSE 250</li>
									  <li class="list-group-item">CSE 331</li>
									  <li class="list-group-item">CSE 474</li>
									  <li class="list-group-item">CSE 115</li>
									</ul>
								</Popover.Title>
								<Popover.Content>
									<Button variant="primary" type="submit">
										Open
									</Button>
								</Popover.Content>
							</Popover>

						}
					>
					<Button id = "cart" controlId = "cart" variant="secondary"> Cart (5) </Button>
					</OverlayTrigger>
				</Form.Group>
			</Form>
        </div>
    );
}

export default Search;