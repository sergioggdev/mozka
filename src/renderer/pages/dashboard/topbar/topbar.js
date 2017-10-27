import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components';

export default class TopBar extends Component {
    render() {
        return (
            <div className="dashboard__bar">
                {/*barra de control*/}
                <div className="dashboard__bar__logo">
                    Logo
                </div>
                <div className="dashboard__bar__box">
                    <Button>Capture</Button>
                    <Button>Run</Button>
                    <Button>Stop</Button>
                </div>
            </div>
        );
    }
}