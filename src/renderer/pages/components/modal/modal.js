import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button/button';
import './modal.scss';

export default class Modal extends Component {
    render() {
        let show = this.props.show || false;
        const modal = (
            <div className="modal">
                <div className="modal__area">
                    <div className="modal__area__title">{this.props.title}</div>
                    <div className="modal__area__text">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
        return(
            <div>
                { show ? modal : null }
            </div>
        );
    }
}


Modal.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};