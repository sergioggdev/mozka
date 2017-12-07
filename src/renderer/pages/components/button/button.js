import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export default class Button extends Component {


    render() {
        return (
            <div className ={`button-box ${this.props.className}`}>
                <button  onClick={this.props.onClick} className ={`${this.props.size} ${this.props.color}`}>
                    <span>{this.props.children}</span>
                </button>
            </div>
        )
    }
}

Button.propTypes = {
    goTo: PropTypes.func,
    children: PropTypes.any.isRequired,
    size: PropTypes.string.isRequired,
    color: PropTypes.string,
    className: PropTypes.string,
};
