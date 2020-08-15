import React from 'react';
import styled from 'styled-components';
import {setFlex, colors, elevation, demotion, below } from '../utilities';
import { NavLink } from 'react-router-dom';
import Bill from '../elements/svg/Bill';
import Functioning from '../elements/svg/Functioning';
import Register from '../elements/svg/Register';
import Download from '../elements/svg/Download';

const BusinessMenuBase = ({ className }) => {
    
    return (

        <div className={className}>
            <div className="table">
                <ul className="nav_list">
                    <li className="nav_business">
                        <NavLink 
                            className="nav_link" 
                            activeClassName="active_link"             
                            exact to={`/negocio`}>          
                            <Bill className="icon" size={25}/>
                            <p className="text">Ventajas</p>
                        </NavLink>
                    </li>
                    <li className="nav_business">
                        <NavLink
                            className="nav_link" 
                            activeClassName="active_link"             
                            exact to={`/negocio/funcionamiento`}>        
                            <Functioning className="icon" size={20}/>
                            <p className="text">Funcionamiento</p>
                        </NavLink>
                    </li>
                    <li className="nav_business">
                        <NavLink
                            className="nav_link" 
                            activeClassName="active_link"             
                            exact to={`/negocio/registro`}>        
                            <Register className="icon" size={20}/>
                            <p className="text">Registro</p>
                        </NavLink>
                    </li>
                    <li className="nav_business">
                        <NavLink
                            className="nav_link" 
                            activeClassName="active_link"             
                            exact to={`/negocio/catalogo`}>        
                            <Download className="icon" size={20}/>
                            <p className="text">Catálogo</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
   
const BusinessMenu = styled(BusinessMenuBase)`
position: relative;
display: flex;
width: 55%;
margin: auto;
${demotion[3]};
border-radius: .8rem;

    .table{        
        margin: auto;
        width: 90%;
    }

    .nav_list{
        list-style-type: none;
        margin: 1rem auto;
        display: flex;
        flex-flow: row nowrap;
        padding: 0;        
        list-style-type: none;
        
        .nav_business{            
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

        .nav_business{
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

        .nav_business{
            transform: scale(.8); 
        }

    `};

    ${below.sm`
        overflow: auto;  

        .nav_business .nav_link .text{
            display: none;
        }
  
    `};
  
`;

export default BusinessMenu;
