import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class Prev extends Component {
    render(){
        const {color, size} = this.props;
        return (
          <svg width={size} height={size} version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" xmlSpace="preserve">                        
          <g><path fill={color} d="M756.5,897c20.9,20.5,20.9,55.7,0,76.8c-20.8,21.6-55.6,21.6-77.1,0l-435-434.9c-22-21.6-22-56.4,0-77.6L679.3,26c21.5-21.3,56.3-21.3,77.1,0c20.9,21.6,20.9,55.6,0,77.2l-397,396.3L756.5,897L756.5,897z"/></g>            
         </svg>
        )
    }
}

Prev.propTypes = {
    color: string,
    size: number
};

Prev.defaultProps = {
    color: '#fff',
    size:25
};