import React from 'react';
import styled from 'styled-components';
import {colors, below} from '../utilities';
import { Whats, Phone } from '../elements/Icons';

const ReservationBase = ({className}) => {

  return (
    <div className={className}>
      <div className="logo">
        <img src="https://cdn1.bbcode0.com/uploads/2020/8/10/2721cb40f8908c560caed8f228ba367a-full.png" alt=""/>
      </div>
      <h3>¡Gracias por escoger Noryan!</h3>
      <p>Por favor selecciona una forma de contacto para completar tu reservación</p>
      <div className="icon">
        <a target="blank" href="https://api.whatsapp.com/send?phone=525536150824&amp;text=Hola,%20me%20contacto%20por%20la%20renta%20de%20juegos." className="contact_numbers"><Whats size={25}/><span>55-3615-0824</span></a>        
      </div>
      <div className="icon">
        <a target="blank" href="tel:54457537" className="contact_numbers"><Phone size={25}/><span>5445 - 7537</span></a>
      </div>
    </div>
  );
};

const Reservation = styled(ReservationBase)`
  margin: 0 auto;
  width: 90%;
  height: 45vh;
  flex-flow: column nowrap;  
  color: ${colors.white_1};
  text-align: center;

  .logo{    
    width: 100%;
    height: 4rem;    
    transform: scale(.5);    
  }

  h3{
      font-size: 1.3rem;
      font-weight: bold;
    }

  p{
    font-size: 1rem;
    width: 70%;
    margin: 0 auto;
  }

  a{
    color: ${colors.white_1};
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
  }  
 
  .icon{    
    margin: 2rem auto;
    margin-top: 3rem;
  } 

  ${below.xsm`
    height: 50vh;

    .icon{    
      margin: 1rem auto;
      margin-top: 1rem;
    } 
    p{
      font-size: 1rem;
      width: 98%;
      margin: 0 auto;
    }
  `}
`;

export default Reservation;


