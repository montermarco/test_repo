import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class Lighting extends Component {
    render(){
        const {color, size} = this.props;
        return (
          <svg width={size} height={size} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" xmlSpace="preserve">
            <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
            <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path fill={color} d="M5991.3,4990.8c-95.9-29.8-221.7-102.3-302.6-176.9c-72.5-63.9-3047.6-4290-3117.9-4430.7c-63.9-121.5-17-355.9,87.4-449.7c108.7-95.9,162-102.3,903.6-102.3h707.6l61.8-61.8c40.5-42.6,61.8-85.2,61.8-127.9c0-51.1-315.4-581.8-1289.4-2169.5c-709.7-1155.1-1289.4-2122.6-1289.4-2148.2c0-66.1,70.3-121.5,140.7-112.9c42.6,4.3,831.2,720.3,3088.1,2798.2C6709.5-454.3,8094.8,832.9,8122.5,869.1c130,185.4,51.2,468.9-157.7,562.6c-78.8,36.2-151.3,40.5-792.8,40.5c-699,0-705.4,0-777.9,49c-138.5,93.8-162,225.9-66.1,379.4c34.1,51.2,432.6,630.8,886.6,1285.1c456.1,656.4,846.1,1221.2,867.4,1257.4c57.5,93.8,53.3,270.7-6.4,379.4c-27.7,46.9-87.4,108.7-136.4,136.4l-87.4,51.1l-903.6-2.1C6451.6,5007.9,6021.2,4999.3,5991.3,4990.8z"/></g></g>
         </svg>
        )
    }
}

Lighting.propTypes = {
    color: string,
    size: number
};


Lighting.defaultProps = {
    color: '#fff',
    size:20
}