import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class Event extends Component {
    render(){
        const {color, size} = this.props;
        return (
          <svg width={size} height={size} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" xmlSpace="preserve">
            <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
            <g><path fill={color} d="M842,891.3V354.3H158v537.1H842z M842,108.7c26,0,49,9.9,68.8,29.8c19.9,19.9,29.8,42.8,29.8,68.8v684c0,26-9.9,49-29.8,68.8C891,980.1,868,990,842,990H158c-27.5,0-50.9-9.9-70-29.8c-19.1-19.9-28.7-42.8-28.7-68.8v-684c0-26,9.6-49,28.7-68.8c19.1-19.9,42.5-29.8,70-29.8h48.2V10h98.7v98.7h390.2V10h98.7v98.7H842z M722.7,503.5L431.2,795L275.1,638.9l52.8-52.8l103.3,103.3l238.7-238.7L722.7,503.5z"/></g>
         </svg>
        )
    }
}

Event.propTypes = {
    color: string,
    size: number
};


Event.defaultProps = {
    color: '#fff',
    size:20
}