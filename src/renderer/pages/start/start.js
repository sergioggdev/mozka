import React, { Component } from 'react';
import Electron from 'electron';
import { connect } from 'react-redux';
import Redux, { popup, proyectName, newProyect, all } from '../../models';
import { Button, Modal } from '../components';
import './start.scss';

export class Start extends Component {
    constructor(props) {
        super(props);
        this.proyectoNuevo = this.proyectoNuevo.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.load = this.load.bind(this);
        this.Electron = Electron;
        this.Redux = Redux;
        this.pName = null;
        this.routerAll = {};
    }

    load() {
        this.Electron.remote.dialog.showOpenDialog({
            filters: [
                { name: 'Mocka proyects', extensions: ['json'] },
                { name: 'All Files', extensions: ['*'] },
            ],
            properties: ['openFile'],
        });
    }

    proyectoNuevo() {
        this.Redux.dispatch(popup(true));
    }

    handleChange(e) {
        this.pName = e.target.value;
    }

    closeModal() {
        this.routerAll.popup = false;
        this.routerAll.newProyect = false;
        this.Redux.dispatch(proyectName(this.pName));
        this.Redux.dispatch(all(this.routerAll));
    }

    // componentWillMount() {
    // console.log('se va a montar el componente')
    // }
    // componentDidMount() {
    // console.log('el componente ya se monto')
    // }

    // componentWillUpdate(nextProps, nextState) {
    // console.log('se actualiza', nextState)
    // }

    // componentWillUnmount() {
    // console.log('el componente se va adesmontar')
    // }

    // componentDidCatch(error, info) {
    // console.log('salio un error', error)
    // }

    render() {
        // deberia quedar como el formulario del login de: https://themeforest.net/item/crudkit-publishingnewsblog-interface-/15772849?s_rank=2
        return (
            <section className="start">
                <div className="start__new">
                    <Button onClick={this.proyectoNuevo} size="large" color="start">
                        Nuevo proyecto {this.props.a}
                    </Button>
                </div>
                <div className="start__help" >
                    <Button onClick={this.load} size="large" color="start">Cargar</Button>
                </div>

                <Modal title="Nuevo proyecto" show={this.props.popup}>
                    <div>
                        <form>
                            <p>
                                Nombre del proyecto:
                            </p>
                            <input
                                type="text"
                                maxLength="20"
                                onChange={this.handleChange}
                                autoFocus="true"
                            />
                            <Button
                                size="small"
                                color="start"
                                className="start__modalAcceptButton"
                                onClick={this.closeModal}
                            >
                                Aceptar
                            </Button>
                        </form>
                    </div>
                </Modal>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        popup: state.router.popup,
        proyectName: state.proyect.name,
        newProyect: state.router.newProyect,
    }
}

export default connect(mapStateToProps)(Start);
