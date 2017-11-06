import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button/button';
import './modal.scss';

export default class Modal extends Component {

    render() {
        return(
            <div className="modal">
                <div className="modal__area">
                    <div className="modal__area__title">{this.props.title}</div>
                    <div className="modal__area__text">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
} 

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};