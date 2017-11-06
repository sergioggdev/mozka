import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from '../components';
import './start.scss';

export default class Start extends Component {

	newProyect() {
		debugger;
		console.log("function")
		this.props.show = true;
	}


	render() {
		// deberia quedar como el formulario del login de: https://themeforest.net/item/crudkit-publishingnewsblog-interface-/15772849?s_rank=2
		//  aqui vendría la logica de cuando sacar la modal o no
		return (
			<section className="start">
                <Link to="/" className="start__new">
					<Button onClick={this.newProyect.bind(this)} size="large" color="blue">Nuevo proyecto</Button>
				</Link>
				<Link to="/" className="start__help" >
                	<Button size="large" color="blue">Cargar</Button>
				</Link>

				<Modal title="Nuevo proyecto" show={false}>
					<div>
            			<p>Nombre: </p><input type="text" />
						<Button onClick={this.newProyect.bind(this)} size="small" color="blue" className="start__modalAcceptButton"> Aceptar</Button>
					</div>
        		</Modal>
			</section>
		);
	}
}