import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class Signup extends Component {
    render(){
        const {color, size} = this.props;
        return (
          <svg version="1.1" fill={color} width={size} height={size}  viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
            <g>
              <path fill={color} d="M236.2,273.8c0,145.7,118.1,263.8,263.8,263.8c145.7,0,263.8-118.1,263.8-263.8S645.7,10,500,10C354.3,10,236.2,128.1,236.2,273.8L236.2,273.8z"/>
              <path  fill={color} d="M952.4,990C951.8,740.1,749.5,537.7,500,537.7C250.5,537.7,48.2,740.1,47.6,990H952.4z"/>
            </g>
          </svg>
        )
    }
}

Signup.propTypes = {
    color: string,
    size: number
};


Signup.defaultProps = {
    color: '#fff',
    size:25
};