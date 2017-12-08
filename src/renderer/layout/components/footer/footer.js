import React, { Component } from 'react';
import './footer.scss';

export default class Footer extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <footer className="footer">
                <div className="footer__alerts">alerta1</div>
                <div className="footer__addons">plugin1</div>
            </footer>
        );
    }
}
