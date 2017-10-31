import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'

import { MainLayout } from '../layout';
import { Start, Welcome, Dashboard } from '../pages';

import './router.css';

//region
export default class RouterClass extends Component {
	constructor(props) {
		super(props);
		this.handleWelcome = this.handleWelcome.bind(this);
		this.handleStart = this.handleStart.bind(this);
		this.state = {
			welcome: false,
			newProyect: true
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

	handleStart() {
		this.setState({newProyect: false});
	}

	render() {
		return (
			<Router>
				<MainLayout>
					{ this.state.welcome ? <Welcome handle={this.handleWelcome}/> : <App newProyect={this.handleStart} /> }
				</MainLayout>
			</Router>
		);
	}
}

const App = (props) => (
	<div style={styles.app}>
		<Route exact path="/" render={() => props.newProyect ? <Redirect to="/start" /> : <Dashboard /> } />
		<Route exact path="/start" component={Start} />
	</div>
);

const styles = {
	app: {
		height: '100%',
	}
};

App.propTypes = {
	newProyect: PropTypes.bool.isRequired
};

//endregion