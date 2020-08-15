import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class Rent extends Component {
    render(){
        const {color, size} = this.props;
        return (
          <svg width={size} height={size} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" xmlSpace="preserve">
            <g><path fill={color} d="M989.1,764.8L888.4,331.6c-4.4-19.1-23.6-31-42.7-26.6l-24.2,5.6L562.5,109.1c-10.2-7.9-23.5-9.5-35-4.9l-2.9-2.7c1.9-6.7,3-13.7,3-21c0-42.3-34.4-76.7-76.7-76.7s-76.7,34.4-76.7,76.7s34.4,76.7,76.7,76.7c4,0,7.8-0.4,11.6-1l-392.7,329l-32.2,7.5c-19.1,4.4-31,23.5-26.6,42.7l100.7,433.2c2.1,9.2,7.8,17.1,15.8,22.1c5.7,3.5,12.2,5.4,18.8,5.4c2.7,0,5.4-0.3,8-0.9l808.3-187.8c9.2-2.1,17.1-7.8,22.1-15.8C989.6,783.6,991.2,774,989.1,764.8z M524.7,196.8c5.9,3.9,12.7,5.8,19.4,5.8c6,0,11.9-1.5,17.2-4.4l171.1,133.1L222.8,449.8L524.7,196.8z"/></g>
         </svg>
        )
    }
}

Rent.propTypes = {
    color: string,
    size: number
};


Rent.defaultProps = {
    color: '#fff',
    size:20
}