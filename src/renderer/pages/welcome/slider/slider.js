import React, { Component } from 'react';
import './slider.scss';

export default class Slider extends Component {

	render() {
		return (			
            <div className="slide">
                <div className="slide__background" style={this.props.background} />
                <div className="slide__background-gradient" />
                <div className="slide__area-text">
                    <img src={this.props.icon}/>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.content}</p>
                </div>
            </div>   
		);
	}
}