import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class Next extends Component {
    render(){
        const {color, size} = this.props;
        return (
          <svg width={size} height={size} version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" xmlSpace="preserve">                        
          <g><path fill={color} d="M738.7,541.9c-0.4,0.4-0.9,0.5-1.3,0.9l-391,429.7c-23.6,23.1-61.7,23.4-85,0.6c-23.3-22.8-23.1-60.1,0.6-83.3l353.9-389L261.3,111.1c-23.6-23.2-23.6-60.6,0-83.8c23.6-23.1,61.9-23.1,85.5,0l392,430.8C762.3,481.3,762.4,518.8,738.7,541.9z"/></g>            
         </svg>
        )
    }
}

Next.propTypes = {
    color: string,
    size: number
};

Next.defaultProps = {
    color: '#fff',
    size:25
};