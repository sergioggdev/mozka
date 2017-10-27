import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export default class Button extends Component {

    goTo() {
        console.log("hola");
        if (this.props.goTo) {
            this.props.goTo();
        }
    }

    render () {
        return (
            <div className ="button-box">
                <button onClick={this.goTo.bind(this)} className ={`${this.props.size} ${this.props.color}`}>
                    <span>{this.props.children}</span>
                </button>
            </div>
        )
    }
} 

Button.propTypes = {
    goTo: PropTypes.func,
    children: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    color: PropTypes.string
}