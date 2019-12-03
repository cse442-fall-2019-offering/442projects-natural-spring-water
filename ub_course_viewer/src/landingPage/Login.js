import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

class Login extends Component {

	state = {
		isLoggedIn: false
	}

	constructor(props) {
		super(props);
	}

	finishLoginRequest = (result) => {
		if(result === "Success"){
			this.setState({isLoggedIn: true});
		}
	}

	sendLoginRequest = (my_callback) =>{
		var email = document.getElementById("teacherEmail").value;
		var password = document.getElementById("teacherPassword").value;
		document.getElementById("teacherEmail").value = "";
		document.getElementById("teacherPassword").value="";
		var xhttp = new XMLHttpRequest();
		xhttp.open("POST", 'https://www-student.cse.buffalo.edu/CSE442-542/2019-Fall/cse-442n/build/login.php', true);
		xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhttp.onreadystatechange = function() {
			if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
				my_callback(xhttp.responseText);
			}
		}
		xhttp.send("user=" + email + "&" + "password=" + password);
		email="";
		password="";
	}

	render() {
		return (
			<div>
				{
				(this.state.isLoggedIn === false) ?
				<Form inline>
					<OverlayTrigger placement="bottom" trigger="click" key="left"
						overlay={
							<Popover id={"popover-positioned-bottom"}>
								<Popover.Title>
									<Form >
										<Form.Group controlId="teacherLogin">
										<Form.Label>Email address</Form.Label>
										<Form.Control id="teacherEmail" type="email" placeholder="Enter email" />

										<Form.Label>Password</Form.Label>
										<Form.Control id="teacherPassword" type="password" placeholder="Password" />
										</Form.Group>

									</Form>
								</Popover.Title>
								<Popover.Content>
									<Button onClick={()=>{this.sendLoginRequest(this.finishLoginRequest);}} variant="primary" type="button">
										Submit
									</Button>
								</Popover.Content>
							</Popover>
						}
					>
					<Button variant="secondary">Teacher Login</Button>
					</OverlayTrigger>
				</Form>
				:
                <OverlayTrigger placement="bottom" trigger="click" key="left"
                    overlay={
                        <Popover id={"popover-positioned-bottom"}>
                            <Popover.Title>
								<Button onClick={()=>{console.log("change password");}} variant="info" type="button">Change Password</Button>
								<br />
								<Button onClick={()=>{this.setState({isLoggedIn: false})}} variant="secondary" type="button">Log Out</Button>
                            </Popover.Title>
                        </Popover>
                    }
                >
                <Button variant="secondary">My Account</Button>
                </OverlayTrigger>
				}
			</div>
		);
	}
}

export default Login;
