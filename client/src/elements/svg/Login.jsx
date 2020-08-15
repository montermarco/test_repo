import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class Login extends Component {
    render(){
        const {color, size} = this.props;
        return (
          <svg width={size} height={size} viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
            <g>
              <path fill={color} d="M411.1,751.7l405.1-233.9c6.4-3.7,10.3-10.5,10.3-17.8s-3.9-14.1-10.3-17.8L411.1,248.3c-6.4-3.7-14.2-3.7-20.5,0c-6.4,3.7-10.3,10.5-10.3,17.8V375H30.5c-11.3,0-20.5,9.2-20.5,20.5v208.9c0,11.3,9.2,20.5,20.5,20.5h349.7v108.9c0,7.4,3.9,14.1,10.3,17.8c3.2,1.8,6.7,2.8,10.3,2.8C404.3,754.4,407.9,753.5,411.1,751.7z"/>
              <path fill={color} d="M838.3,8.8H419.8c-11.3,0-20.5,9.2-20.5,20.5v61.6c0,11.3,9.2,20.5,20.5,20.5h418.5c27,0,49,22,49,49v679.1c0,27-22,49-49,49H419.8c-11.3,0-20.5,9.2-20.5,20.5v61.6c0,11.3,9.2,20.5,20.5,20.5h418.5c83.7,0,151.7-68.1,151.7-151.7V160.5C990,76.8,922,8.8,838.3,8.8z"/>
            </g>
          </svg>
        )
    }
}

Login.propTypes = {
    color: string,
    size: number
};


Login.defaultProps = {
    color: '#fff',
    size:25
};