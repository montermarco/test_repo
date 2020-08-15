import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class PriceEvent extends Component {
    render(){
        const {color, size} = this.props;
        return (
          <svg width={size} height={size} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" xmlSpace="preserve">
            <g><path fill={color} d="M900.3,723.1V99.7H276.9v623.4H900.3z M900.3,10c23.6,0,44.5,9,62.6,27.1C981,55.2,990,76,990,99.7v623.4c0,23.6-9,44.1-27.1,61.5s-38.9,26.1-62.6,26.1H276.9c-23.6,0-44.1-8.7-61.5-26.1c-17.4-17.4-26.1-37.9-26.1-61.5V99.7c0-23.6,8.7-44.5,26.1-62.6C232.8,19,253.3,10,276.9,10H900.3z M589.7,633.4V276.9H500v-87.6h177.2v444.1H589.7z M99.7,189.3v711h711V990h-711c-23.6,0-44.5-9-62.6-27.1C19,944.8,10,924,10,900.3v-711H99.7z"/></g>
         </svg>
        )
    }
}

PriceEvent.propTypes = {
    color: string,
    size: number
};


PriceEvent.defaultProps = {
    color: '#fff',
    size:20
}