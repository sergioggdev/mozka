import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Footer, Header } from '../components';

import './mainlayout.scss';

export default class MainLayout extends Component {
    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (
            <div className="layout">
                <Header />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        );
    }
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
