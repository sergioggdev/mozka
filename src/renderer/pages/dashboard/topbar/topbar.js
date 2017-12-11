import React, { Component } from 'react';
import { ipcRenderer } from 'electron';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Modal } from '../../components';
import './topbar.scss';

export class TopBar extends Component {
    // capture run stop
    constructor(props) {
        super(props);
        this.proyectName = props.proyectName;
        this.capture = this.capture.bind(this);
        this.run = this.run.bind(this);
        this.stop = this.stop.bind(this);
        this.ipcRenderer = ipcRenderer;
    }

    capture() {
        this.ipcRenderer.send('serverMsg', 'capture');
    }

    run() {
        this.ipcRenderer.send('serverMsg', 'run');
    }

    stop() {
        this.ipcRenderer.send('serverMsg', 'stop');
    }


    render() {
        return (
            <div className="top-bar">
                <div className="top-bar__logo">
                    {this.proyectName}
                </div>
                <div className="top-bar__box">
                    <Button onClick={this.capture} size="small" color="top-bar">Capturar</Button>
                    <Button onClick={this.run} size="small" color="top-bar">Iniciar</Button>
                    <Button onClick={this.stop} size="small" color="top-bar">Parar</Button>
                </div>
                {/* <Modal title="Título modal">
                    <div>sdfsdfsd</div>
                </Modal> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        proyectName: state.proyect.name,
    }
}


export default connect(mapStateToProps)(TopBar);
