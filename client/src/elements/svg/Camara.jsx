import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class Camara extends Component {
    render(){
        const {color, size} = this.props;
        return (
          <svg width={size} height={size} version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" xmlSpace="preserve">                        
          <g><path fill={color} d="M578.1,372.6c97.4,0,176.4,79,176.4,176.4c0,97.4-79,176.4-176.4,176.4c-97.4,0-176.4-79-176.4-176.4S480.7,372.6,578.1,372.6z"/>
          <path fill={color} d="M160.4,196.2h78.4c10.8,0,19.6,8.8,19.6,19.6c0,10.8-8.8,19.6-19.6,19.6h-78.4c-10.8,0-19.6-8.8-19.6-19.6C140.8,205,149.6,196.2,160.4,196.2z"/>
          <path fill={color} d="M931.2,255h-125l-78.4-117.6H414.2L335.8,255h-267C36.3,255,10,281.3,10,313.8v490c0,32.5,26.3,58.8,58.8,58.8h862.4c32.5,0,58.8-26.3,58.8-58.8v-490C990,281.3,963.7,255,931.2,255z M205.3,430.1h-77.9v-56.3h77.9V430.1z M578.2,764.6c-119.1,0-215.6-96.5-215.6-215.6c0-119.1,96.5-215.6,215.6-215.6c119.1,0,215.6,96.5,215.6,215.6C793.8,668.1,697.2,764.6,578.2,764.6z"/></g>
         </svg>
        )
    }
}

Camara.propTypes = {
    color: string,
    size: number
};


Camara.defaultProps = {
    color: '#fff',
    size:25
};
