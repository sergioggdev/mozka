import React, {Component} from 'react';
import './button.scss';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.goTo = this.goTo.bind(this);
    }
    goTo(){
        
    }
    render () {
        return (
            <div className ="button-box">
                <button onClick={this.goTo} className ={this.props.size}>
                    <span>{this.props.children}</span>
                </button>
            </div>
        )
    }
} 