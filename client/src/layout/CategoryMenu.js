import React from 'react';
import styled from 'styled-components';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { colors, demotion, elevation, setFlex, below, above } from '../utilities';
import Castle from '../elements/svg/Castle';
import Fut from '../elements/svg/Fut';
import Joy from '../elements/svg/Joy';
import Micro from '../elements/svg/Micro';
import Jumping from '../elements/svg/Jumping';
import LittleTike from '../elements/svg/LittleTike';


function CategoryMenu({ className, type}) {
  
  let {url} = useRouteMatch()
    
    return (
        <div className={className}>      
        <div className="logo_menu"></div>      
          <ul className="nav_list">
          <li key="inflable" className="nav_item">
            <NavLink className="nav_link" activeClassName="active_link" exact to={ type === 'venta' ? `${url}/catalogo/inflable` : `${url}/inflable`}>
              <Castle size={35}/> 
              <p className="nav_txt">inflable</p>
            </NavLink>
          </li>
          <li key="futbolito" className="nav_item">
            <NavLink className="nav_link" activeClassName="active_link" exact to={ type === 'venta' ? `${url}/catalogo/futbolito` : `${url}/futbolito`}>          
              <Fut size={35}/>
              <p className="nav_txt">futbolito</p>
            </NavLink>
          </li>
          <li key="maquinita" className="nav_item">
            <NavLink className="nav_link" activeClassName="active_link" exact to={ type === 'venta' ? `${url}/catalogo/maquinita` : `${url}/maquinita`}>          
              <Joy size={35}/>
              <p className="nav_txt">maquinita</p>
            </NavLink>
          </li>
          <li key="rockola" className="nav_item">
            <NavLink className="nav_link" activeClassName="active_link" exact to={ type === 'venta' ? `${url}/catalogo/rockola` : `${url}/rockola`}>          
              <Micro size={30}/>
              <p className="nav_txt">rockola</p>
            </NavLink>
          </li>
          <li key="jumping" className="nav_item">
            <NavLink className="nav_link" activeClassName="active_link" exact to={ type === 'venta' ? `${url}/catalogo/jumping` : `${url}/jumping`}>
              <Jumping size={35}/>
              <p className="nav_txt">jumping</p>
            </NavLink>
          </li>
          
          <li key="little_tike" className="nav_item">
            <NavLink className="nav_link" activeClassName="active_link" exact to={ type === 'venta' ? `${url}/catalogo/little_tike` : `${url}/little_tike`}>          
              <LittleTike size={35}/>
              <p className="nav_txt">little tike</p>
            </NavLink>
          </li>
        </ul>
        </div>
    )
}

const Menu = styled(CategoryMenu)`
    width: 15vw;
    height: 65vh;
    border-radius: 1.5rem;
    ${demotion[3]};
    position: relative;
    margin-top: 1rem;
    margin-left: 1rem;

    .logo_menu{
      position: relative;
      background-image: url('https://i.postimg.cc/tR2VhhzY/turtle-sm.png');
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;
      height: 4rem;
      margin-top: .5rem;
      transform: scale(.6); 
    }    

    .nav_list{
      position: relative;
	    list-style: none;
      margin: 1rem 0 0 2rem;
      padding: 0;
      display: block; 
      flex-flow: column nowrap;  
      
      .nav_item{
        position: relative;        
        height: 2.5rem;        
        display: block;        
        border-top-left-radius: .5rem;
        border-bottom-left-radius: .5rem;
        ${setFlex({ x:"flex-start"})};

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
          text-transform: capitalize;
          font-size: .8rem;
          font-weight: bold;
          cursor: pointer;
          ${setFlex({ x:"space-around" })};

          .nav_txt{
            padding-left: 1.5rem;          
            width: 100%;
          }        
          
        }
      }
    }

    .active_link{
      position: relative;        
      height: 2.5rem;        
      display: block;
      cursor: pointer;
      border-top-left-radius: .5rem;
      border-bottom-left-radius: .5rem;
      background-color: ${colors.white_trans};
      ${elevation[3]};
    }

    ${above.md`      
      width: 20%;
      .nav_item{  margin: 1.5rem 0}
    `}

    ${above.lg`      
      width: 15%;
      height: 75vh;     
      
      .nav_item{  margin: 2rem 0}
    `}

    @media all and (max-width: 1280px) and (min-width: 768px) and (orientation: portrait){          
      height: 75vh;
      width: 30%;      
    }
    
    ${below.md`      
      width: 95%;
      height: 3.5rem;
      ${demotion[3]};      
      margin: 3.5rem auto;
      margin-bottom: 2.5rem;
      border-radius: .8rem;
      overflow: auto;      

      .logo_menu{
        display: none;
      }


      .nav_list{       
	     list-style: none;       
       padding: 0;
       display: flex;
       flex-flow: row nowrap;
       justify-content: space-around;
       margin: .5rem 0; 

       .nav_icon{
         color: red;
       }

       .nav_item .nav_link .nav_txt{
        display: none;
       }

       .active_link{                    
        height: 3rem;
        border-radius: .5rem;
        border-top-left-radius: .5rem;
        border-bottom-left-radius: .5rem;
        background-color: ${colors.blue_1};
        ${elevation[3]};
      }

    `}

    ${below.xsm`
      width: 90%;
      height: 4rem;
      
      .nav_list{
        justify-content: space-between;        
      }      
    `}
    
`;

export default Menu;