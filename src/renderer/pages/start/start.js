import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components';
import './start.scss';

export default class Start extends Component {
	render() {
		// deberia quedar como el formulario del login de: https://themeforest.net/item/crudkit-publishingnewsblog-interface-/15772849?s_rank=2
		return (
			<section className="start">
                <div className="start__title">Titulo y logo</div>
                <Link to="/">
					<Button size="small" color="red">Nuevo proyecto</Button>
				</Link>
                <div className="start__new">boton para nuevo proyecto</div>
                <div className="start__help">boton de ayuda</div>
			</section>
		);
	}
}