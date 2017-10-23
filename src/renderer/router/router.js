import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

import { MainLayout } from '../layout';
import { Start, Welcome, Dashboard } from '../pages';

import './router.css';

//region
export default class RouterClass extends Component {
	constructor(props) {
		super(props);
		this.handleWelcome = this.handleWelcome.bind(this);
		this.state = {
			welcome: true,
			newProyect: false
		};
		
	}

	componentDidMount() {		
		console.log(this.state);
		console.log(window.location.href);
	}

	componentDidUpdate() {
		console.log(window.location.href);
	}

	handleWelcome() {
		this.setState({welcome: false});
	}

	render() {
		return (
			<Router>
				<MainLayout>
					{ this.state.welcome ? <Welcome handle={this.handleWelcome}/> : <App newProyect={this.state.newProyect} /> }
				</MainLayout>
			</Router>
		);
	}
}

const App = (props) => (
	<main>
		<Route exact path="/" render={() => props.newProyect ? <Redirect to="/start" /> : <Dashboard /> } />
		<Route exact path="/start" component={Start} />
	</main>
);

//endregion