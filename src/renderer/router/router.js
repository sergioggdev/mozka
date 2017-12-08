import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

import { MainLayout } from '../layout';
import { Start, Welcome, Dashboard } from '../pages';

import './router.css';

export class RouterClass extends Component {
    constructor(props) {
        super(props);
        this.itemRender = null;
    }

    render() {
        // console.log(this.itemRender);
        this.itemRender = () => {
            if (!this.props.welcome && !this.props.newProyect) {
                return <Dashboard />;
            } else if (!this.props.welcome && this.props.newProyect) {
                return <Start />;
            } else if (this.props.welcome) {
                return <Welcome />;
            }
            return null;
        };

        return (
            <div>
                <MainLayout>
                    {this.itemRender()}
                </MainLayout>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    welcome: state.router.welcome,
    newProyect: state.router.newProyect,
});

RouterClass.propTypes = {
    welcome: PropTypes.bool.isRequired,
    newProyect: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(RouterClass);
