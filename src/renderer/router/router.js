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
		this.itemRender = null;
		this.state = {
			welcome: true,
			newProyect: true
		};
		
	}

	componentWillMount() {	
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
		if (this.state.newProyect === true) {
			this.setState({newProyect: false});
		} else {
			this.setState({newProyect:true});
		}
		
	}

	render() {
		this.itemRender = renderFunct(this.state, this.handleWelcome, this.handleStart);
		console.log(this.itemRender);
		function renderFunct(state, handleWelcome, handleStart) {
				if (state.welcome === false && state.newProyect === false) {return <Dashboard handle = {handleStart}/>}
				if (state.welcome === false && state.newProyect === true) {return <Start handle = {handleStart}/>}
				if (state.welcome === true) {return <Welcome handle =  {handleWelcome}/>}
			
		}
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
