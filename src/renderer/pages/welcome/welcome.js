import React, { Component } from 'react';
import Slider from './slider/slider';
import './welcome.scss';

import Background from './slider/fondo.jpg';
import Background1 from './slider/fondo1.jpg';
import Icon from './slider/icon.png';

const slides = [
	{
		id: 1,
		title: "See how it works",
		content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró',
		background: { backgroundImage: `url(${Background}` },
		icon: Icon
	}, 
	{
		id: 2,
		title: "Works Perfectily",
		content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró',
		background: { backgroundImage: `url(${Background}` },
		icon: Icon
	}, 
	{
		id: 3,
		title: "Amazing!",
		content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró',
		background: { backgroundImage: `url(${Background1}` },
		icon: Icon
	}
];

export default class Welcome extends Component {
	constructor(props) {
		super(props);
		this.wait = false;
		this.nextSlide = this.nextSlide.bind(this);
		this.backSlide = this.backSlide.bind(this);
		this.state = {
			activeSlide: 0,
			animation: null,
		};
		
	}

	nextSlide() {
		if (!this.wait) {
			if (slides.length-1 > this.state.activeSlide) {
				this.wait = true;
				this.setState({activeSlide: this.state.activeSlide + 1, animation: true});
				setTimeout( () => { this.wait = false; }, 1100);	
			}
			if (slides.length-1 === this.state.activeSlide) {
				alert('Felicidades, terminaste el tutorial');
			}
		}
	}

	backSlide() {
		if (!this.wait) {
			if (this.state.activeSlide > 0) {
				this.wait = true;
				this.setState({activeSlide: this.state.activeSlide - 1, animation: false});
				setTimeout( () => { this.wait = false; }, 1100);	
			}
		}
	}

	render() {
		let siguiente = slides.length-1 === this.state.activeSlide ? 'Terminar' : 'Siguiente'; 
		return (
			<div className="welcome">
				<Slider 
					title={slides[this.state.activeSlide].title} 
					content={slides[this.state.activeSlide].content} 
					background={slides[this.state.activeSlide].background} 
					icon={slides[this.state.activeSlide].icon}
					animation={this.state.animation}
				/>
				<div className="welcome__navigator">
					<div onClick={this.backSlide}>Atras</div>
					<div className="welcome__navigator__balls">
						{slides.map( i => <span key={i.id}>O </span> )}
					</div>
					<div onClick={this.nextSlide}>{siguiente}</div>
				</div>
				
			</div>
		);
	}
}

