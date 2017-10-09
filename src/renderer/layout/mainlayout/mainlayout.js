import React, { Component } from 'react';
import { Footer, Header } from '../components';

export default class MainLayout extends Component {
	render() {
		return (
			<div className="layout">
                <Header />
                	{this.props.children}
                <Footer />
			</div>
		);
	}
}