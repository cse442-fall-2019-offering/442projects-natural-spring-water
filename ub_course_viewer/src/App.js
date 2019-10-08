import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import LandingPage from "./landingPage/LandingPage";
import Core from "./core/Core"
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

// Currently the landing page that holds the Search and courseElement components

function App() {
	return(
		<BrowserRouter>
			<Route path="/" exact render={() => <LandingPage></LandingPage>}/>
			<Route path="/graph" exact render={() => <Core></Core>}/>
		</BrowserRouter>
    );
}

export default App;
