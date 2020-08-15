import React from 'react';
import styled from 'styled-components';
import {setFlex, colors} from '../utilities';
import Burger from '../elements/Burger';

function NavBarBase({ className, open }) {
    return (
        <div className={className}>            
            <Burger open={open}/>
        </div>
    )
}

const NavBar = styled(NavBarBase)` 
    position: relative;
    width: 100%;
    background-color: ${colors.blue_1};
    ${setFlex({x:"space-around"})};
    overflow: auto;
`;

export default NavBar;