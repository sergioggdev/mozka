import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
		this.itemRender = null;
		this.state = {
			welcome: false,
			newProyect: true
		};
		
	}

	componentWillMount() {	
		// manejamos el componente que queremos cargar 
		this.itemRender = renderFunct(this.state);
		function renderFunct(state) {
			switch (state) {
				case {welcome: false, newProyect: false}: return <Dashboard />
				case {welcome: false, newProyect: true}: return <Start />
				default : return <Welcome/>
			}
		}

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
			<div>
			<MainLayout>
				{this.itemRender}
			</MainLayout>
			</div>
		);
	}
}

const App = (props) => (
	<div style={styles.app}>
		<Route exact path="/" render={() => props.newProyect ? <Start handle={props.handleStart}/> : <Dashboard /> } />
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
