import React, { Component } from 'react';
import './dashboard.scss';

export default class Dashboard extends Component {
	render() {
		/*
		* Welcome a la parte mas complicada
		* Aqui tenemos que hacer el panel entero de gestion, 
		* donde podra dar al boton de capturar para que programa empiece a capturar servicios
		* Donde el boton servir levantaa un servidor para servir esos servicios
		* Una tala con todos los servocios para poder editarlos y o activarlos
		* Un boton de ñadir manualmente un servicio
		*/
		return (
			<div className="dashboard">
            	<div className="dashboard__bar">
					{/*barra de control*/}
					<div className="dashboard__bar__logo">
						Logo
					</div>
					<div className="dashboard__bar__box">
						<button>Capture</button>
						<button>Run</button>
						<button>Stop</button>
					</div>
				</div>
            	<div className="dashboard__table">
					{/*La tabla con los servicios*/}
					{/* <Table /> */}
				</div>
			</div>
		);
	}
}