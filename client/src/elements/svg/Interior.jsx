import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class Interior extends Component {
    render(){
        const {color, size} = this.props;
        return (
          <svg width={size} height={size} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" xmlSpace="preserve">
            <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
            <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path fill={color} d="M155.5,4964.5L100,4909v-625.9v-625.9l55.5-55.5c30.6-30.6,70.8-55.5,86.1-55.5c28.7,0,30.6-380.9,30.6-4115.2v-4117.1l47.9-45.9l45.9-47.9h1351.3c1389.6,0,1401.1,0,1458.5,74.7c17.2,22.9,23,258.4,24.9,953.2v924.5l3051,3.8l3051,5.7l49.8,45.9l49.8,45.9V410.9v3135.2h193.3c187.6,0,193.3,1.9,248.8,55.5l55.5,55.5v625.9V4909l-55.5,55.5L9789,5020H5000H211L155.5,4964.5z M9574.6,4285v-411.5l-4570.8,3.8L435,3881.1l-5.7,407.7l-3.8,405.8H5000h4574.6V4285z M750.8-454.2v-4000.4h-76.6h-76.6v4000.4v4000.4h76.6h76.6V-454.2z M1401.6-454.2v-4000.4h-162.7h-162.7v4000.4v4000.4h162.7h162.7V-454.2z M1899.2-454.2v-4000.4h-76.6h-76.6v4000.4v4000.4h76.6h76.6V-454.2z M2377.7-454.2v-4000.4h-76.6h-76.6v4000.4v4000.4h76.6h76.6V-454.2z M2875.4-454.2v-4000.4h-76.6h-76.6v4000.4v4000.4h76.6h76.6V-454.2z M9077,522v-3024.2l-2932.3,3.8l-2934.3,5.7v162.7v162.7l767.5,5.7l767.5,3.8l40.2,44l42.1,44V533.4l1.9,2601.2l-49.8,44l-49.8,42.1h-765.6h-763.7v162.7v162.7h2938.1H9077V522z M4502.3,531.5v-2363.9h-650.8h-650.8V531.5v2363.9h650.8h650.8V531.5z"/><path fill={color} d="M5222,3180.6l-49.8-38.3V2043.6V946.9l-47.9-11.5c-24.9-5.7-65.1-30.6-86.1-53.6c-34.4-38.3-38.3-67-38.3-354.1c0-308.2,0-313.9,47.9-359.8c24.9-26.8,63.2-47.9,86.1-47.9c38.3,0,38.3-3.8,38.3-1096.8v-1098.7l44-40.2l44-42.1h1705.4h1707.4l38.3,49.8l40.2,51.7V535.4V3127l-47.9,45.9l-45.9,47.9h-1692C5283.3,3220.8,5273.7,3220.8,5222,3180.6z M8426.2,531.5v-2363.9H6961.9H5497.7v976.2V120h514.9h516.8l53.6,45.9c53.6,45.9,53.6,47.9,61.3,310.1c3.8,162.7-1.9,290.9-15.3,336.9c-38.3,124.4-65.1,130.2-633.5,130.2h-497.7v976.2v976.2h1464.3h1464.3V531.5z M6301.6,522v-76.6h-488.1h-488.1V522v76.6h488.1h488.1V522z"/></g></g>
         </svg>
        )
    }
}

Interior.propTypes = {
    color: string,
    size: number
};


Interior.defaultProps = {
    color: '#fff',
    size:20
}