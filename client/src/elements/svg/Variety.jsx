import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class Variety extends Component {
    render(){
        const {color, size} = this.props;
        return (
            <svg width={size} height={size} x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
              <g>
                <path fill={color} d="M10,114.8h281.9v210.1H10V114.8z"/>
                <path fill={color} d="M356.9,114.8h281.9v210.1H356.9V114.8z"/>
                <path fill={color} d="M708.1,114.8H990v210.1H708.1V114.8L708.1,114.8z"/>
                <path fill={color} d="M10,395h281.9V605H10V395z"/>
                <path fill={color} d="M356.9,395h281.9V605H356.9V395z"/>
                <path fill={color} d="M708.1,395H990V605H708.1V395L708.1,395z"/>
                <path fill={color} d="M10,675.1h281.9v210.1H10V675.1z"/>
                <path fill={color} d="M356.9,675.1h281.9v210.1H356.9V675.1z"/>
                <path fill={color} d="M708.1,675.1H990v210.1H708.1V675.1L708.1,675.1z"/>
              </g>
            </svg>          
        )
    }
}

Variety.propTypes = {
    color: string,
    size: number
};


Variety.defaultProps = {
    color: '#fff',
    size:25
};