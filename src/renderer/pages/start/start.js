import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components';
import './start.scss';

export default class Start extends Component {

	// handleStart () {
	// 	console.log("asdfdsafds");
	// 	this.setState({newProyect: false});
	// }

	goTo() {
        console.log("Start");

		this.props.newProyect();
    }


	render() {
		// deberia quedar como el formulario del login de: https://themeforest.net/item/crudkit-publishingnewsblog-interface-/15772849?s_rank=2
		return (
			<section className="start">
                <Link to="/" className="start__new">
					<Button onClick={this.goTo.bind(this)} size="small" color="blue">Nuevo proyecto</Button>
				</Link>
                <Button className="start__help"size="small" color="blue">Cargar</Button>
			</section>
		);
	}
}