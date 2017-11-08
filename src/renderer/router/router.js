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

<<<<<<< HEAD
=======
	handleWelcome() {
		this.setState({welcome: false});
	}

>>>>>>> work-sgarciaga
	render() {
		return (
			<Router>
				<MainLayout>
<<<<<<< HEAD
					{ this.state.welcome ? <Welcome /> : <App newProyect={this.state.newProyect} /> }
=======
					{ this.state.welcome ? <Welcome handle={this.handleWelcome}/> : <App newProyect={this.state.newProyect} /> }
>>>>>>> work-sgarciaga
				</MainLayout>
			</Router>
		);
	}
}

const App = (props) => (
<<<<<<< HEAD
	<main>
		<Route exact path="/" render={() => props.newProyect ? <Redirect to="/start" /> : <Dashboard /> } />
		<Route exact path="/start" component={Start} />
	</main>
);
=======
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
>>>>>>> work-sgarciaga
