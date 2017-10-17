import React, { Component } from 'react';
import Slider from './slider/slider';
import './welcome.scss';

import Background from './slider/fondo.jpg';
import Icon from './slider/icon.png';

export default class Welcome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeSlide: 0
		};
		this.nextSlide = this.nextSlide.bind(this);
		this.backSlide = this.backSlide.bind(this);
	}

	nextSlide() {
		this.setState({activeSlide: this.state.activeSlide + 1});
	}
	backSlide() {
		this.setState({activeSlide: this.state.activeSlide - 1});
	}

	render() {
		return (
			<div className="welcome">
				
				<Slider 
					title={slides[this.state.activeSlide].title} 
					content={slides[this.state.activeSlide].content} 
					background={slides[this.state.activeSlide].background} 
					icon={slides[this.state.activeSlide].icon} 
				/>
		
				<div className="welcome__navigator">
					<div onClick={this.backSlide}>Atras</div>
					<div className="welcome__navigator__balls">
						{slides.map( i => <span>O </span> )}
					</div>
					<div onClick={this.nextSlide}>Siguiente</div>
				</div>
				
			</div>
		);
	}
}

const slides = [
	{
		title: "See how it works",
		content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró',
		background: { backgroundImage: `url(${Background}` },
		icon: Icon
	}, 
	{
		title: "Works Perfectily",
		content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró',
		background: { backgroundImage: `url(${Background}` },
		icon: Icon
	}, 
	{
		title: "Amazing!",
		content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró',
		background: { backgroundImage: `url(${Background}` },
		icon: Icon
	}
];