import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class Space extends Component {
    render(){
        const {color, size} = this.props;
        return (
          <svg width={size} height={size} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" xmlSpace="preserve">
            <g><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"><path fill={color} d="M100,2512.6V5.2h172.3h172.3v2335.2v2335.2h2335.2h2335.2v172.3V5020H2607.4H100V2512.6z"/><path fill={color} d="M6621.2,4327.1l637.4-637.4l-1225-1225l-1225-1225V1144v-93.8l568.5-570.4c601-602.9,637.4-629.7,758-591.4c42.1,15.3,423,382.8,1272.9,1232.6l1209.7,1209.7l185.7-187.6c103.3-103.4,392.4-386.6,643.1-629.7l453.6-440.2v1944.7v1944.7H7943.8H5985.7L6621.2,4327.1z"/><path fill={color} d="M3889.8,299.9c-15.3-7.7-578.1-558.9-1248-1228.8L1422.6-2146.3l-455.6,442.2c-250.7,245-532.1,520.6-627.8,616.3c-93.8,95.7-178,174.2-185.7,174.2c-9.6,0-15.3-869-15.3-1933.2V-4780h1935.1h1935.1L3551-4305.3c-250.7,260.3-528.3,547.4-614.4,637.4l-155,162.7L3977.9-2309c658.4,656.5,1209.7,1217.4,1225,1246.1c15.3,28.7,26.8,84.2,26.8,124.4c0,68.9-24.9,95.7-580,652.7C4110,254,4064,296.1,3993.2,301.8C3953,307.6,3905.2,305.7,3889.8,299.9z"/><path fill={color} d="M9494.2-2027.6l-5.7-2340.9l-2339-5.7l-2340.9-3.8v-162.7v-162.7H7316h2507.4V-2196V311.4h-162.7H9498L9494.2-2027.6z"/></g></g>
         </svg>
        )
    }
}

Space.propTypes = {
    color: string,
    size: number
};


Space.defaultProps = {
    color: '#fff',
    size:20
}