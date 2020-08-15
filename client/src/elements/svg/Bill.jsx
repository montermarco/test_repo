import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class Bill extends Component {
    render(){
        const {color, size} = this.props;
        return (
          <svg width={size} height={size} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" xmlSpace="preserve">
            <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
            <g><g transform="translate(0.000000,491.000000) scale(0.100000,-0.100000)"><path fill={color} d="M7173.3,3020.2c-757.7-206.6-1403.7-387.1-1437-399c-38-14.3,532.1-23.8,1527.2-23.8c1501.1-2.4,1586.6,0,1574.7,40.4c-30.9,97.4-204.3,741.1-204.3,752.9C8634,3419.2,8479.6,3378.9,7173.3,3020.2z"/><path fill={color} d="M1301.9,2124.8l-149.6-7.1V-88.9v-2208.9H5000h3847.8V-88.9V2120H8748C8237.3,2127.2,1413.5,2129.5,1301.9,2124.8z M5439.4,1607c600.9-156.8,1078.3-629.4,1251.7-1232.7c73.6-266,73.6-660.3,0-926.3c-173.4-608-643.7-1068.8-1263.6-1237.4c-209-57-643.7-57-855,0C3950.2-1623.2,3463.3-1136.3,3297-516.4c-54.6,209-54.6,646,0,855.1C3475.1,1018,4021.4,1514.4,4734,1645C4888.4,1673.5,5266,1654.5,5439.4,1607z M2368.3,336.3c21.4-11.9,68.9-59.4,106.9-106.9c154.4-204.3,26.1-505.9-235.2-546.3c-185.3-30.9-399,149.6-399,334.9c0,142.5,116.4,301.7,251.8,344.4C2166.4,386.2,2301.8,371.9,2368.3,336.3z M7990.3,317.3c230.4-163.9,211.4-477.4-33.3-596.2c-111.6-54.6-168.6-59.4-266-21.4c-171,64.1-268.4,249.4-223.2,420.4C7529.5,343.4,7809.8,450.3,7990.3,317.3z"/><path fill={color} d="M4843.2,1231.7c-68.9-68.9-80.8-97.4-80.8-190c0-102.1-4.8-111.6-92.6-154.4c-387.2-197.1-489.3-672.2-213.8-985.7c114-130.6,270.8-197.2,522.5-225.6c142.5-16.6,206.6-33.3,228-64.1c47.5-64.1,38-140.1-28.5-204.3c-123.5-123.5-320.6-102.1-460.8,49.9c-73.6,80.7-104.5,97.4-178.1,97.4c-114,0-194.8-54.6-228-156.7c-52.3-159.1,111.6-375.3,358.7-477.4c80.8-30.9,87.9-42.7,99.7-156.7c7.1-97.4,23.8-133,85.5-187.6c104.5-92.6,199.5-87.9,301.7,14.3c68.9,68.9,80.7,97.4,80.7,190c0,102.1,4.8,111.6,95,156.7c237.5,121.1,365.8,325.4,361,581.9c-2.4,194.8-59.4,325.4-197.1,448.9c-125.9,114-313.5,180.5-505.9,180.5c-251.8,0-311.1,254.2-76,332.5c125.9,40.4,261.3-2.4,368.1-116.4c73.6-78.4,106.9-97.4,175.8-97.4c102.1,0,218.5,90.3,237.5,182.9c30.9,149.6-144.9,368.2-356.3,448.9c-99.7,38-102.1,42.7-102.1,144.9c0,90.3-11.9,118.8-80.7,187.6c-57,59.4-102.2,80.8-156.8,80.8C4945.4,1312.5,4902.6,1291.1,4843.2,1231.7z"/><path fill={color} d="M368.4,1158.1c-194.8-54.6-270.8-87.9-268.4-111.6c9.5-42.7,551-2016.5,562.9-2049.8c7.1-11.9,11.9,486.9,11.9,1111.6c2.4,622.3-4.7,1133-14.3,1130.6C648.7,1238.8,518.1,1200.8,368.4,1158.1z"/><path fill={color} d="M9322.8-300.2v-1121.1l54.6,16.6c28.5,9.5,159.1,45.1,289.8,80.7c166.3,45.1,235.2,73.6,232.8,97.4c-11.9,68.9-555.8,2026-565.3,2037.9C9327.5,816.1,9322.8,317.3,9322.8-300.2z"/><path fill={color} d="M1161.7-2813.2c7.1-23.8,57-201.9,109.3-399c54.6-194.8,102.1-361,109.3-365.8c9.5-11.9,2793.2,743.4,2895.3,783.8c26.1,9.5-667.4,19-1539.1,19C1235.4-2772.8,1149.9-2775.2,1161.7-2813.2z"/></g></g>
         </svg>
        )
    }
}

Bill.propTypes = {
    color: string,
    size: number
};


Bill.defaultProps = {
    color: '#fff',
    size:20
}