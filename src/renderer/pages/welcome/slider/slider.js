import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './slider.scss';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            content: null,
            background: null,
            icon: null,
            animationClass: '',
            backgroundClass: '',
        };
    }

    componentWillMount() {
        this.setState({
            title: this.props.title,
            content: this.props.content,
            background: this.props.background,
            icon: this.props.icon,
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.animation === true) {
            this.setState({ animationClass: 'animationNextIn' });
            setTimeout(() => {
                this.setState({
                    title: this.props.title,
                    content: this.props.content,
                    background: this.props.background,
                    icon: this.props.icon,
                    animationClass: 'animationNextOut',
                });
                setTimeout(() => {
                    this.setState({ animationClass: '' });
                }, 500);
            }, 500);
        } else if (nextProps.animation === false) {
            this.setState({ animationClass: 'animationBackIn' });
            setTimeout(() => {
                this.setState({
                    title: this.props.title,
                    content: this.props.content,
                    background: this.props.background,
                    icon: this.props.icon,
                    animationClass: 'animationBackOut',
                });
                setTimeout(() => {
                    this.setState({ animationClass: '' });
                }, 500);
            }, 500);
        }
    }

    render() {
        return (
            <div className={`slide ${this.props.className}`}>
                <div className="slide__background" style={this.state.background} />
                <div className="slide__background-gradient" />
                <div className={`slide__area-text ${this.state.animationClass}`}>
                    <img src={this.state.icon} alt="icono" />
                    <h3>{this.state.title}</h3>
                    <p>{this.state.content}</p>
                </div>
            </div>
        );
    }
}

Slider.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    background: PropTypes.object.isRequired,
    icon: PropTypes.string.isRequired,
    animation: PropTypes.bool,
};
