import React from 'react';
import styled from 'styled-components';
import {setFlex, colors, below, fixed} from '../utilities';
import { Whats, Phone } from '../elements/Icons';
import { Link } from 'react-router-dom';
import {Space} from '../elements/Container';
import Login from '../elements/svg/Login'
import Signup from '../elements/svg/Signup'

function TopBarBase({ className }){
    return (
      <>
      <div className={className}>
        <Link className="link" to='/'><div className="logo_top"></div></Link>
        <div className="btn_wrapper">
         <a target="blank" href="https://api.whatsapp.com/send?phone=525536150824&amp;text=Hola,%20me%20contacto%20por%20la%20renta%20de%20juegos." className="contact_numbers">
           <Whats size={25}/><span>55-3615-0824</span></a>
           <a target="blank" href="tel:54457537" className="contact_numbers"><Phone size={25}/><span>5445 - 7537</span></a>
          <Link className="auth" to="/users/ingreso"><Login/></Link>
          <Link className="auth" to="/users/registro"><Signup/></Link>          
        </div>        
      </div>
      <Space/>
      </>
    )
}

const TopBar = styled(TopBarBase)`    
    ${fixed()}
    width: 100%;
    height: 3rem;
    padding: 0;    
    background-color: ${colors.blue_2};           
    ${setFlex({ x:"space-around"})};    

    .link{
      width: 60%;
    }
  
    .logo_top{      
      position: relative;
      background-image: url('https://i.postimg.cc/vHM2Xfwk/footer-logo.png');
      background-position: left;
      background-repeat: no-repeat;
      width: 100%;
      height: 3rem;
      margin-left: 1rem;
      cursor: pointer;
      display: inline-block;
    }

    .btn_wrapper{
      width: 100%;
      ${setFlex({ x:"space-around" })};
      padding: 0 1rem;

      .contact_numbers{
        color: ${colors.white_1};
        text-decoration: none;
        font-size: 1rem;        
      }

      .auth{
        display: none;
      }
    }
    

    ${below.sm`
      .logo_top{        
        height: 2rem;
        margin-left: .3rem;        
        transform: scale(.8);
      }

      .btn_wrapper span{
        display: none;
      }
    `}

    ${below.sm`
      .link{
        width: 100%;
      }
      
      .logo_top{        
        margin-left: 0;
        transform: scale(.7);
      }
    `}
    
`;

export default TopBar;
