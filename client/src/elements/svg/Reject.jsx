import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class Reject extends Component {
    render(){
        const {color, size} = this.props;
        return (
          <svg width={size} height={size} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" xmlSpace="preserve">
            <g><path fill={color} d="M131.1,959.8c-107.9,0-152-80-98.1-177.7l368.9-668.6c54-97.8,142.2-97.8,196.2,0L967,782.1c53.9,97.7,9.8,177.7-98.1,177.7H131.1z M549,344.1c0-28.3-21.9-51.3-49-51.3c-27.1,0-49,23-49,51.3v205.2c0,28.3,22,51.3,49,51.3c27.1,0,49-23,49-51.3V344.1z M549,754.6c0-28.3-21.9-51.3-49-51.3c-27.1,0-49,23-49,51.3c0,28.3,22,51.3,49,51.3C527.1,805.9,549,782.9,549,754.6"/></g>
         </svg>
        )
    }
}

Reject.propTypes = {
    color: string,
    size: number
};


Reject.defaultProps = {
    color: '#fff',
    size:20
}