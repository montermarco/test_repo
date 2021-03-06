import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class Cancellations extends Component {
    render(){
        const {color, size} = this.props;
        return (
          <svg width={size} height={size} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" xmlSpace="preserve">
            <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
            <g><path fill={color} d="M488.4,727.8"/><path fill={color} d="M310.5,173.3L10,509.2l300.5,317.5H990V173.3H310.5z M946.4,783.1H336.7L75.3,508l261.3-291.1h609.8L946.4,783.1L946.4,783.1z M476.9,673.9l137.6-137.6l125.3,125.3l30.8-30.8L645.3,505.6l126.7-126.7l-31.1-31.1L614.2,474.5L478,338.3l-30.9,30.8l136.2,136.2L445.9,642.9L476.9,673.9z"/></g>
         </svg>
        )
    }
}

Cancellations.propTypes = {
    color: string,
    size: number
};


Cancellations.defaultProps = {
    color: '#fff',
    size:20
}