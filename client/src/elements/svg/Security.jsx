import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class Security extends Component {
    render(){
        const {color, size} = this.props;
        return (
          <svg width={size} height={size} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" xmlSpace="preserve">
            <g><path fill={color} d="M920.8,128.8C634.2,128.8,513.7,20.1,513.3,19c-2.1-5.3-7.2-8.9-13.2-9h-0.2c-5.6,0-10.9,3.6-13.1,8.8c-0.4,1.1-122,110-407.5,110c-7.9,0-14.3,6.5-14.3,14.3L137,630.4c30.6,204,342.7,351.9,357.3,358.3c1.8,0.9,3.8,1.2,5.7,1.2c1.9,0,3.9-0.4,5.8-1.2c14.6-6.4,333-163.3,357.3-358.3l72.1-487.4C935.1,135.3,928.7,128.8,920.8,128.8 M784.2,602.1C760,755.7,515.9,877.7,504.5,882.7c-1.4,0.7-3,1-4.5,1c-1.5,0-3-0.3-4.5-1c-11.3-5-251.2-124.7-279.7-280.6l-72.1-381.5c0-6.2,5.1-11.3,11.3-11.3c223.5,0,334.3-85.1,334.6-86.1c1.7-4.2,5.9-6.9,10.4-6.9h0.2c4.6,0.1,8.7,2.8,10.3,7.1c0.3,0.8,110.4,85.9,334.7,85.9c6.2,0,11.1,5,11.1,11.3L784.2,602.1z"/></g>
         </svg>
        )
    }
}

Security.propTypes = {
    color: string,
    size: number
};


Security.defaultProps = {
    color: '#fff',
    size:20
}