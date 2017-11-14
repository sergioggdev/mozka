import React, { Component } from 'react';
import { ipcRenderer } from 'electron';
import PropTypes from 'prop-types';
import { Button, Modal } from '../../components';
import './topbar.scss';

export default class TopBar extends Component {

    // capture run stop
    constructor(props) {
        debugger
        super(props);
        this.proyectName = this.props.proyectName;
        this.capture = this.capture.bind(this);
        this.run = this.run.bind(this);
        this.stop = this.stop.bind(this);
    }

    capture() {
        console.log("capture");
        ipcRenderer.send('serverMsg', 'capture');
    }

    run() {
        console.log("run");
        ipcRenderer.send('serverMsg', 'run');
    }

    stop() {
        console.log("stop");
        ipcRenderer.send('serverMsg', 'stop');
    }


    render() {
        return (
            <div className="top-bar">
                <div className="top-bar__logo">
                   {this.proyectName}
                </div>
                <div className="top-bar__box">
                    <Button onClick={this.capture} size="small" className="">Capturar</Button>
                    <Button onClick={this.run} size="small" className="">Iniciar</Button>
                    <Button onClick={this.stop} size="small" className="">Parar</Button>
                </div>
                {/* <Modal title="Título modal">
                    <div>sdfsdfsd</div>
                </Modal> */}
            </div>
        );
    }
}