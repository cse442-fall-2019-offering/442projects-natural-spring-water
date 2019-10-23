import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component} from 'react';
import './App.css';
import LandingPage from "./landingPage/LandingPage";
import Core from "./core/Core"
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

// Currently the landing page that holds the Search and courseElement components

class App extends Component {
	state = {
		my_shopping_cart: []
	}

	render() {
		return(
			<BrowserRouter>
				<Route path="/" exact render={() => <LandingPage cart={this.state.my_shopping_cart}></LandingPage>}/>
				<Route path="/graph" exact render={() => <Core cart={this.state.my_shopping_cart}></Core>}/>
			</BrowserRouter>
		);
	}
}

export default App;
