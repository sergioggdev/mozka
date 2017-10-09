import React, { Component } from 'react';
import './start.scss';

export default class Start extends Component {
	render() {
		// deberia quedar como el formulario del login de: https://themeforest.net/item/crudkit-publishingnewsblog-interface-/15772849?s_rank=2
		return (
			<section className="start">
                <div className="start__title">Titulo y logo</div>
                <div className="start__load">boton para cargar</div>
                <div className="start__new">boton para nuevo proyecto</div>
                <div className="start__help">boton de ayuda</div>
			</section>
		);
	}
}