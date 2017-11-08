import React, { Component } from 'react';
import Electron from 'electron';
import { Link } from 'react-router-dom';
import { Button, Modal } from '../components';
import './start.scss';

export default class Start extends Component {

	constructor(props) {
		super(props);
		this.newProyect = this.newProyect.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			show: false,
			proyectName: "",
		};	
	}

	load() {
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
		debugger;
		this.props.handle();
			this.setState({ show: true });
	}

	handleChange(event) {
		this.setState({ proyectName:event.target.value });
	}

	closeModal() {
		console.log("cerramos modal");
		this.setState({ show: false });
		console.log("nombre proyecto",this.state.proyectName);
	}

	// componentWillMount() {
	// 	console.log('se va a montar el componente')
	// }
	// componentDidMount() {
	// 	console.log('el componente ya se monto')
	// }

	// componentWillUpdate(nextProps, nextState) {
	// 	console.log('se actualiza', nextState)
	// }

	// componentWillUnmount() {
	// 	console.log('el componente se va adesmontar')
	// }

	// componentDidCatch(error, info) {
	// 	console.log('salio un error', error)
	// }

	render() {
		// deberia quedar como el formulario del login de: https://themeforest.net/item/crudkit-publishingnewsblog-interface-/15772849?s_rank=2
		// aqui vendría la logica de cuando sacar la modal o no
		return (
			<section className="start">
                <div className="start__new">
					<Button onClick={this.newProyect} size="large" color="blue">Nuevo proyecto</Button>
				</div>
				<div className="start__help" >
                	<Button onClick={this.load.bind(this)} size="large" color="blue">Cargar</Button>
				</div>

				<Modal title="Nuevo proyecto" show={this.state.show}>
					<div>
            			<p>Nombre del proyecto: </p><input type="text" maxLength="20" value={this.state.proyectName} onChange={this.handleChange}/>
							<Link to="/" >
								<Button onClick={this.closeModal} size="small" color="blue" className="start__modalAcceptButton">Aceptar</Button>
							</Link>
					</div>
        		</Modal>
			</section>
		);
	}
}