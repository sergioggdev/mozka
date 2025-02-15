import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopBar from './topbar/topbar';
import Table from './table/table';
import './dashboard.scss';

export default class Dashboard extends Component {
    shouldComponentUpdate() {
        return true;
    }
    render() {
        /*
        * Welcome a la parte mas complicada
        * Aqui tenemos que hacer el panel entero de gestion,
        * donde podra dar al boton de capturar para que programa empiece a capturar servicios
        * Donde el boton servir levantaa un servidor para servir esos servicios
        * Una tabla con todos los servicios para poder editarlos y o activarlos
        * Un boton de añadir manualmente un servicio
        */
        return (
            <div className="dashboard">
                <TopBar />
                <Table />
            </div>
        );
    }
}

Dashboard.propTypes = {

};

Dashboard.defaultProps = {

};
