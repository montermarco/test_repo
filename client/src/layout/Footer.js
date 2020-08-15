import React from 'react';
import styled from 'styled-components';
import {setFlex, absolute, colors, below} from '../utilities';
import { Face, Insta, Ytb, Twttr, Vissa, Master, Amex, Ppal } from '../elements/Icons';


function FooterBase({ className }) {
    return (
        <footer className={className}>            
            <div className="logo_foot"></div>
            <div className="social_foot">
              <a target="blank" href="https://www.facebook.com/inflablesnoryan/"><Face  size="25"/></a>
              <a target="blank" href="https://www.instagram.com/explore/locations/423402721027688/inflables-noryan/"><Insta size="25"/></a>
              <a target="blank" href="https://www.youtube.com/"><Ytb size="25"/></a>
              <a target="blank" href="https://twitter.com/home"><Twttr size="25"/></a>                
            </div>
            <div className="location_foot">                
              <p className="aviso">Aviso de privacidad</p>
              <p>Copyright &copy; 2020 Noryan</p>
            </div>            
            <div className="pay_foot">
            <a target="blank" href="https://www.visaonline.com/"><Vissa  size="25"/></a>
            <a target="blank" href="https://www.mastercard.com.mx/es-mx.html"><Master size="25"/></a>
            <a target="blank" href="https://paymentsportal.americanexpress.com/public/home/login.htm"><Amex className="amex" size="25"/></a>
            <a target="blank" href="https://www.paypal.com/mx/home"><Ppal size="25"/></a>
            </div>            
        </footer>
    )
}

const Footer = styled(FooterBase)`    
    ${absolute({ yP:"bottom"})};
    width: 100%;
    color: ${colors.txt_3};
    height: 3rem;
    ${setFlex({ x:"space-between", y:"flex-end" })};

    .logo_foot{
      position: relative;
      background-image: url('https://i.postimg.cc/tR2VhhzY/turtle-sm.png');
      background-position: center;
      background-repeat: no-repeat;
      width: 15%;
      height: 4rem;
      transform: scale(.6);
      margin-bottom: -.8rem;
      display: block;
    }

    .location_foot{
      width: 33%;
      margin-bottom: -3px;      
        
        .location{
          display: block;
          margin: 0 auto;

        }

        .aviso{
          font-weight: bold;
          cursor: pointer;
          font-size: .7rem;
        }

        p {
          margin: 0 0 .3rem 1rem;
          text-align: center;
          font-size: .5rem;
        }
    }

    .social_foot{
      width: 25%;
      margin-bottom: .4rem;
    }

    .pay_foot{
      width: 25%;      
      margin-bottom: .4rem;
      margin-right: 3rem;   
      ${setFlex({ x:"flex-end" })};
      

      .amex{
        margin-bottom: -5px;        
      }
    }

    ${below.sm`
      position: static;
      height: auto;
      flex-direction: column;      
      justify-content: center;
      align-items: center;
      flex-shrink: 0;      
      margin-bottom: .3rem;
      padding-top: 1rem;

      .logo_foot{
        width: 20%;
      }

      .social_foot{
        width: 100%;
        ${setFlex()};
        margin-bottom: 0;
      }

      .location_foot{              
        
        .location{          
          margin: 0 auto;
        }

        .aviso{
          font-weight: bold;
          cursor: pointer;
          font-size: .5rem;
        }

        p {          
          font-size: .5rem;
          margin: .2rem 0;
          padding: 0;
        }
      }

      .pay_foot{
        display: none;
    }
    `};

    ${below.xsm`
      .logo_foot{
        width: 100%;
        height: 4rem;        
      }
    `};
`;


export default Footer;


