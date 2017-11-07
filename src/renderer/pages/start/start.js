import React, { Component } from 'react';
import Electron from 'electron';
import { Link } from 'react-router-dom';
import { Button, Modal } from '../components';
import './start.scss';

export default class Start extends Component {

	constructor(props) {
		super(props);
		this.newProyect = this.newProyect.bind(this);
		this.state = {
			show: false,
		};
		
	}

	load() {
		debugger;
		Electron.remote.dialog.showOpenDialog({
			filters:[
				{name:'Mocka proyects', extensions: ['json']},
				{name: 'All Files', extensions: ['*']}
			], 
			properties:['openFile']
		});
	}

	newProyect() {
		console.log(this.state)
			this.setState({ show: true });
	}

	componentWillMount() {
		console.log('se va a montar el componente')
	}
	componentDidMount() {
		console.log('el componente ya se monto')
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('se actualiza', nextState)
	}

	componentWillUnmount() {
		console.log('el componente se va adesmontar')
	}

	componentDidCatch(error, info) {
		console.log('salio un error', error)
	}

	render() {
		// deberia quedar como el formulario del login de: https://themeforest.net/item/crudkit-publishingnewsblog-interface-/15772849?s_rank=2
		// aqui vendría la logica de cuando sacar la modal o no
		return (
			<section className="start">
                <div className="start__new">
					<Button onClick={this.newProyect} size="large" color="blue">Nuevo proyecto {this.state.show}</Button>
				</div>
				<div className="start__help" >
                	<Button onClick={this.load.bind(this)} size="large" color="blue">Cargar</Button>
				</div>

				<Modal title="Nuevo proyecto" show={false}>
					<div>
            			<p>Nombre: </p><input type="text" />
						<Button onClick={this.newProyect} size="small" color="blue" className="start__modalAcceptButton">Aceptar</Button>
					</div>
        		</Modal>
			</section>
		);
	}
}