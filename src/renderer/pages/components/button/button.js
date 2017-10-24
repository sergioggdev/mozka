import React, {Component} from 'react';
import './button.scss';

export default class Button extends Component {
    render () {
        return (
            // <div className="button1">
            //     <input type="button" value="Funciona" className="prueba"/>
            //     <rect class="shape" height="60" width="320" />
            // </div>
            <div class="svg-wrapper">
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              {/* <rect class="shape" height="60" width="320" /> */}
                                 {/*p ancho    p alto       f ancho     f alto*/}
              <line class="top"      x1="0"     y1="0"      x2="320"    y2="0"></line>
              <line class="left"     x1="0"     y1="0"      x2="0"      y2="60"></line>
              <line class="bottom"   x1="0"     y1="60"     x2="320"    y2="60"></line>
              <line class="right"    x1="320"   y1="0"      x2="320"    y2="60"></line>}
            </svg>
             <div class="text">Nuevo</div>
          </div>
        )
    }
} 