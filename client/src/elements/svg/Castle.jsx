import React, {Component} from 'react';
import {number, string } from 'prop-types';

export default class Castle extends Component {
    render(){
        const {color, size} = this.props;
        return (
          <svg width={size} height={size} version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" xmlSpace="preserve">                        
            <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path fill={color} d="M1591.7,4072.2c-94.5-30.6-1406.8-1332.8-1457.9-1447.7c-46-107.2-46-171.1,5.1-280.8c48.5-99.6,127.7-160.8,247.7-183.8l81.7-17.9l2.6-2872.3c2.6-2760,5.1-2877.4,51.1-2956.6c25.5-43.4,94.5-102.1,153.2-130.2c99.6-51.1,153.2-51.1,1940.4-45.9l1835.7,7.7l12.8,924.2l12.8,921.7l79.2,99.6c122.5,153.2,268.1,217,474.9,206.8c211.9-10.2,360-102.1,449.4-275.7c56.2-109.8,56.2-130.2,56.2-1000.8v-888.5h1820.4c1118.3,0,1853.6,10.2,1909.8,25.5c48.5,12.8,122.6,61.3,166,104.7l74.1,76.6l12.8,2903l12.8,2900.4l76.6,15.3c122.5,25.5,209.4,97,255.3,211.9c84.2,209.4,79.1,214.5-684.2,983c-725.1,727.7-771.1,760.9-947.2,727.7c-61.3-10.2-240-173.6-776.2-707.2c-748.1-743-771.1-773.6-720-965.1c30.6-112.3,181.3-250.2,268.1-250.2h63.8v-610.2V936.9l-298.7-10.2c-270.6-7.7-311.5-15.3-388.1-68.9c-117.4-84.3-181.3-234.9-181.3-428.9V268h-188.9h-186.4l-15.3,191.5c-15.3,219.6-74.1,337-206.8,418.7c-79.1,48.5-125.1,53.6-607.7,53.6c-500.4,0-528.5-2.6-610.2-58.7c-127.7-84.3-201.7-247.7-201.7-444.3V268h-188.9h-186.4l-12.8,191.5C3784.9,607.5,3767,671.4,3716,748c-97,148.1-194,183.8-513.2,183.8h-270.6v612.8v612.8h63.8c89.4,0,237.4,140.4,268.1,252.8c51.1,188.9,25.5,219.6-722.5,967.6c-383,380.4-712.3,694.5-732.8,694.5s-61.3,5.1-89.4,12.8C1691.3,4090.1,1635.1,4085,1591.7,4072.2z M1847,2027.1c130.2-35.7,296.2-206.8,339.6-347.2c20.4-63.8,30.6-278.3,30.6-579.6V625.4h-526h-523.4l7.7,543.8l7.7,546.4l71.5,107.2c51.1,74,112.3,127.7,204.3,171.1C1604.5,2060.3,1693.8,2068,1847,2027.1z M8541.5,1991.4c81.7-40.8,155.7-104.7,201.7-171.1l74.1-104.7l7.7-546.4l7.6-543.8h-523.4h-525.9v505.5c0,434,7.7,515.7,48.5,605.1C7961.9,2016.9,8268.3,2126.7,8541.5,1991.4z M9327.9-893.8V-1098l-4332.8-7.7l-4335.3-5.1v199.2c0,109.8,5.1,206.8,12.8,211.9c5.1,7.7,1955.7,12.8,4332.7,12.8l4322.5-2.6V-893.8z"/></g></g>
         </svg>
        )
    }
}

Castle.propTypes = {
    color: string,
    size: number
};


Castle.defaultProps = {
    color: '#fff',
    size:25
};