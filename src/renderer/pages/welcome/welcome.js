import React, { Component } from 'react';
import './welcome.scss';

export default class Welcome extends Component {
	render() {
		// deberia quedar asi (las del color rosa fuxia): https://themeforest.net/item/-parts-ui-first-welcome-kit-with-interaction-animations/14957192?s_rank=1
		return (
			<section className="welcome">
				<div className="welcome__area-text">
					<div>Este es un tutoial de como se usa</div>
					<div>Este es un tutoial de como se usa</div>
					<div>Este es un tutoial de como se usa</div>
				</div>
				<div className="welcome__navigator">puntos de navegacion</div>
			</section>
		);
	}
}