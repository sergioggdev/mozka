import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components';
import './topbar.scss';

export default class TopBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar__logo">
                    Logo
                </div>
                <div className="top-bar__box">
                    <Button size="small" className="">Capture</Button>
                    <Button size="small" className="">Run</Button>
                    <Button size="small" className="">Stop</Button>
                </div>
            </div>
        );
    }
}