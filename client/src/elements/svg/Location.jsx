import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class Location extends Component {
    render(){
        const {color, size} = this.props;
        return (
          <svg width={size} height={size} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" xmlSpace="preserve">
            <g><path fill={color} d="M500,10c-169.4,0-306.3,136.9-306.3,306.3S346.9,714.4,500,990c153.1-275.6,306.3-504.4,306.3-673.8S669.4,10,500,10z M500,438.8c-67.9,0-122.5-54.6-122.5-122.5S432.1,193.8,500,193.8s122.5,54.6,122.5,122.5S567.9,438.8,500,438.8z"/></g>
         </svg>
        )
    }
}

Location.propTypes = {
    color: string,
    size: number
};


Location.defaultProps = {
    color: '#fff',
    size:20
}