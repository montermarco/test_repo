import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class Close extends Component {
    render(){
        const {color, size} = this.props;
        return (
          <svg width={size} height={size} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" xmlSpace="preserve">
            <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
            <g><path fill={color} d="M500,10C229.3,10,10,229.4,10,500s219.3,490,490,490s490-219.4,490-490S770.7,10,500,10z M727.1,640.4c23.9,23.9,23.9,62.7,0,86.6C715.1,739,699.4,745,683.8,745c-15.7,0-31.4-6-43.3-17.9L500,586.6L359.6,727.1C347.6,739,331.9,745,316.3,745c-15.7,0-31.4-6-43.3-17.9c-23.9-23.9-23.9-62.7,0-86.6L413.4,500L272.9,359.6c-23.9-23.9-23.9-62.7,0-86.6s62.7-23.9,86.6,0L500,413.4l140.4-140.4c23.9-23.9,62.7-23.9,86.6,0s23.9,62.7,0,86.6L586.6,500L727.1,640.4L727.1,640.4z"/></g>
         </svg>
        )
    }
}

Close.propTypes = {
    color: string,
    size: number
};


Close.defaultProps = {
    color: '#fff',
    size:20
}