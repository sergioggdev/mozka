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

    componentWillMount() {
        console.log(this.props)
    }
    componentDidMount() {
        console.log('el componente ya se monto')
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('se actualiza', nextProps)
    }

    componentWillUnmount() {
        console.log('el componente se va adesmontar')
    }

    render() {
        // console.log(this.itemRender);
        this.itemRender = () => {
            if (this.props.welcome === false && this.props.newProyect === false) {
                return <Dashboard />
            }
            if (this.props.welcome === false && this.props.newProyect === true) {
                return <Start />
            }
            if (this.props.welcome === true) {
                return <Welcome />
            }
        }

        return (
            <div>
                <MainLayout>
                    {this.itemRender()}
                </MainLayout>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        welcome: state.router.welcome,
        newProyect: state.router.newProyect,
    };
};

export default connect(mapStateToProps)(RouterClass);
