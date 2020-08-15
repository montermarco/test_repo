import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class More extends Component {
    render(){
        const {color, size} = this.props;
        return (
         <svg width={size} height={size} version="1.1"  x="0px" y="0px" viewBox="0 0 1000 1000" xmlSpace="preserve">
        <g><path fill={color} d="M10,500c0,67.9,55.1,123,123,123c67.9,0,123-55.1,123-123c0-67.9-55.1-123-123-123C65.1,377,10,432.1,10,500L10,500z"/>
        <path fill={color} d="M377.5,500c0,67.9,55.1,123,123,123s123-55.1,123-123c0-67.9-55.1-123-123-123C432.5,377,377.5,432.1,377.5,500L377.5,500z"/>
        <path fill={color} d="M743.9,500c0,67.9,55.1,123,123,123s123-55.1,123-123c0-67.9-55.1-123-123-123S743.9,432.1,743.9,500L743.9,500z"/></g>
        </svg>
        )
    }
}

More.propTypes = {
    color: string,
    size: number
};


More.defaultProps = {
    color: '#fff',
    size:25
};
