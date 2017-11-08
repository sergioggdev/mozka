import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button/button';
import './modal.scss';

export default class Modal extends Component {

    // componentWillMount() {
	// 	console.log('se va a montar la modal')
	// }
	// componentDidMount() {
	// 	console.log('la modal ya se monto')
	// }

	// componentWillUpdate(nextProps, nextState) {
	// 	console.log('se actualiza la modal',this.props.show)
	// }

	// componentWillUnmount() {
	// 	console.log('la modal se va adesmontar')
	// }

	// componentDidCatch(error, info) {
	// 	console.log('salio un error en la modal', error)
	// }

    render() {
        let show = this.props.show;
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