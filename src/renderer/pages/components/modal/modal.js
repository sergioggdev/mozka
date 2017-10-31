import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button/button';
import './modal.scss';

export default class Modal extends Component {

    render() {
        return(
            <div className="modal">

                <div className="modal__area">
                    <div className="modal__area__title">{infoModal.title}</div>
                    <div className="modal__area__text">
                        <input type="modal__area__text__text" value={infoModal.info}></input>
                        {/* <input type="modal__area__text__text"></input> */}
                        {/* <input type="modal__area__text__button"></input> */}
                    </div>
                </div>
            </div>
        );
    }
} 

const infoModal = {
    title: "Información",
    info: ""
    
}

Modal.propTypes = {
    
};