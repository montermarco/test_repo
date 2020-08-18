import React from 'react';
import styled from 'styled-components';
import {setFlex, colors, elevation, demotion, below} from '../utilities';
import { NavLink, useRouteMatch } from 'react-router-dom';
import Rent from '../elements/svg/Rent';
import Security from '../elements/svg/Security';
import Payment from '../elements/svg/Payment';
import Cancellations from '../elements/svg/Cancellations';

const ConditionsMenuBase = ({ className }) => {
    
    let { url } = useRouteMatch();

    return (
        <div className={className}>
            <div className="table">
                <ul className="nav_list">
                    <li className="nav_condition">
                        <NavLink 
                            className="nav_link" 
                            activeClassName="active_link"             
                            exact to={`${url}/renta`}>
                            <Rent className="icon" size={20}/>
                            <p className="text">Renta</p>
                        </NavLink>
                    </li>
                    <li className="nav_condition">
                        <NavLink
                            className="nav_link" 
                            activeClassName="active_link"             
                            exact to={`${url}/seguridad`}>        
                            <Security className="icon" size={20}/>
                            <p className="text">Seguridad</p>
                        </NavLink>
                    </li>
                    <li className="nav_condition">
                        <NavLink
                            className="nav_link" 
                            activeClassName="active_link"             
                            exact to={`${url}/pago`}>        
                            <Payment className="icon" size={20}/>
                            <p className="text">Pago</p>
                        </NavLink>
                    </li>
                    <li className="nav_condition">
                        <NavLink
                            className="nav_link" 
                            activeClassName="active_link"             
                            exact to={`${url}/cancelaciones`}>        
                            <Cancellations className="icon" size={20}/>
                            <p className="text">Cancelaciones</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
   
const ConditionsMenu = styled(ConditionsMenuBase)`
    position: relative;
    display: flex;
    width: 55%;
    margin: auto;
    ${demotion[3]};
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;

    .table{
        margin: auto;
        width: 90%;
    }


    
    .nav_list{
        list-style: none;
        margin: 1rem auto;
        display: flex;
        flex-flow: row nowrap;
        padding: 0;
                
        .nav_condition{
            height: 2rem;  
            width: 24%;      
            display: block;   
            ${setFlex({ x:"flex-start", y:"space-around"})};
            position: relative;
            border-top-left-radius: .5rem;
            border-top-right-radius: .5rem;
            ${elevation[5]};
            border-bottom-left-radius: .5rem;
            border-bottom-right-radius: .5rem;
            margin: 0 0.5rem;
                                
            &:hover{
                background-color: ${colors.white_trans};
                ${elevation[3]};
            }
            
            .nav_link{
                position: relative;
                width: 100%;
                padding: 1rem;                
                color: ${colors.white_1};
                text-decoration: none;
                cursor: pointer;
                ${setFlex()};
            }
            
            .text{
                padding-top: 1.5rem;          
                width: 100%;
                display: inline-block;
                font-size: 0.9rem;
                font-weight: 700;
                padding-bottom: 1.5rem;
                margin-left: 1rem;
                ${setFlex()};
            }        
        }
    }
  
    .active_link{
        position: relative;
        height: 2rem;        
        display: block;
        cursor: pointer;
        border-top-left-radius: .5rem;
        border-top-right-radius: .5rem;
        border-bottom-left-radius: .5rem;
        border-bottom-right-radius: .5rem;
        background-color: ${colors.white_trans};
        ${elevation[3]};
    }

    ${below.lg`
        width: 90%;

        .nav_condition{
            transform: scale(.9); 
        }

    `};

    ${below.md`
        width: 95%;

        .table{
            margin: auto 0.5rem;
            width: 95%;
        }

        .nav_list{
            margin: 0.3rem auto;
        }

        .nav_condition{
            transform: scale(.8); 
        }

    `};

    ${below.sm`
        overflow: auto;  

        .nav_condition .nav_link .text{
            display: none;
        }
    
    `};
  
`;

export default ConditionsMenu;
