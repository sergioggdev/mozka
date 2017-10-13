import React, { Component } from 'react';
import './header.scss';

export default class Header extends Component {
	render() {
		return (
			<header className="header">
                <div className="header__menu">
                    <menu>Archivo</menu>
                    <menu>Editar</menu>
                    <menu>Ver</menu>
                    <menu>Ayuda</menu>
                </div>
                <div className="header__title">
                    <h1>Mozca</h1>
                </div>
                <div className="header__icons">
                    <menu>_</menu>
                    <menu>O</menu>
                    <menu>X</menu>
                </div>
			</header>
		);
	}
}