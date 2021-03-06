import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class Back extends Component {
    render(){
        const {color, size} = this.props;
        return (
          <svg width={size} height={size} version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
            <g><path fill={color} d="M655.1,405.5l-322.5,0h-95.3l116.6-21.3l84.4-84.4C456.1,282,466,258.3,466,233c0-25.2-9.8-49-27.7-66.8c-17.8-17.8-41.6-27.7-66.8-27.7c-25.2,0-49,9.8-66.8,27.7l-267,267c-4.3,4.3-8.2,9.1-11.7,14.3c-1.9,2.9-3.2,5.4-3.9,6.7l0,0.1l-0.4,0.7c-1,1.8-2.8,4.9-4.4,8.8c-1.5,3.6-2.4,6.7-2.8,8.4l-0.1,0.2l0,0l-0.1,0.4c-0.6,1.8-1.6,4.7-2.3,8.5c-1,5-1.4,9.5-1.6,13.2c-0.2,1.7-0.3,3.7-0.3,6c0,2.1,0.2,3.8,0.3,5.2c0.2,3.8,0.6,8,1.5,12.8c0.8,3.8,1.8,6.8,2.3,8.6l0.1,0.4l0,0.2c0.5,1.7,1.3,4.8,2.8,8.4c1.7,4.2,3.6,7.5,5,9.9c0.6,1.2,1.7,3.4,3.3,5.9l0.2,0.2l0.2,0.2c3.6,5.4,7.6,10.3,12,14.6l266.7,266.8c17.9,17.9,41.6,27.7,66.8,27.7c25.2,0,48.9-9.8,66.8-27.6c36.9-36.9,36.9-96.9,0-133.7L332.6,594.5h0.1l-68.1-68.2l98.6,68.2H655c80.5,0,146,65.5,146,146c0,52.1,42.4,94.5,94.5,94.5c52.1,0,94.5-42.4,94.5-94.5C990,555.8,839.8,405.5,655.1,405.5z"/></g>
          </svg>
        )
    }
}

Back.propTypes = {
    color: string,
    size: number
};


Back.defaultProps = {
    color: '#fff',
    size: 25
};