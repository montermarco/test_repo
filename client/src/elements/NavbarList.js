import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {setFlex, colors, below, fixed} from '../utilities';

function NavBarBase({ className, open, onClick }) {
    return (
      <div className={className}>
        <ul className="nav_list" open={open} onClick={onClick}>
            <li className="nav_item"> <NavLink activeClassName="active_link" className="nav_link" exact to="/productos/inflable">Catálogo de renta</NavLink></li>
            <li className="nav_item"> <NavLink activeClassName="active_link" className="nav_link" exact to="/paquetes">Renta de paquetes</NavLink></li>
            <li className="nav_item"> <NavLink activeClassName="active_link" className="nav_link" exact to="/venta/catalogo/inflable">Venta</NavLink></li>
            <li className="nav_item"> <NavLink activeClassName="active_link" className="nav_link" exact to="/negocio/beneficios">Inicia tu negocio</NavLink></li>
            <li className="nav_item"> <NavLink activeClassName="active_link" className="nav_link" exact to="/condiciones/renta">Condiciones</NavLink></li>
            <li className="nav_item"> <NavLink activeClassName="active_link" className="nav_link" exact to="/nosotros">Nosotros</NavLink></li>
            <li className="nav_item"> <NavLink activeClassName="active_link" className="nav_link" exact to="/preguntas">Preguntas Frecuentes</NavLink></li>
        </ul>
      </div>
    )
}

const NavbarList = styled(NavBarBase)` 
    position: relative;
    width: 100%;
    background-color: ${colors.blue_1};
    ${setFlex({x:"space-around"})};          
    
    .nav_list{
      list-style: none;
      margin: 1rem auto;
      display: flex;
      flex-flow: row nowrap;
    }

    .nav_link{ 
      font-size: 1rem;
      color: ${colors.white_1};
      text-decoration: none;
      display: block;
      margin: 0 1.5rem;
    }

    ${below.md`
      ${fixed({y:"3rem" })};
      background-image: linear-gradient(${colors.blue_2}, ${colors.noryan_blue} ); 
      z-index: 15;

      .nav_list{
        flex-flow: column nowrap;       
        height: 100vh;        
        width: 100%;
        padding: 2.5rem 0;
      }

      .nav_item{        
        margin: 1.3rem auto;    
      }
      
      transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
      transition: transform 0.3s ease-in-out;  
            
      .nav_link{ 
        font-size: 1.2rem;        
        display: block;        
      }

      .nav_list .active_link{ 
        font-weight: bold;
        font-size: 1.3rem;
        color: ${colors.white_1};
        background-color: ${colors.white_trans};
        padding: 0 1rem;
        border-radius: .8rem;
      }

    `};


    /* Active Style */
    .active_link{ 
        font-weight: bold;
        font-size: 1rem;
        color: ${colors.blue_3};
    }

`;

export default NavbarList;