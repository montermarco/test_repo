import React from 'react';
import styled from 'styled-components';
import {SectionsContainer} from '../elements/Container';
import Variety from '../elements/svg/Variety.jsx';
import Quality from '../elements/svg/Quality.jsx';
import Trust from '../elements/svg/Trust.jsx';
import Payment from '../elements/svg/Payment.jsx';
import Invoice from '../elements/svg/Invoice.jsx';
import {setFlex, colors, demotion, below, elevation} from '../utilities';

const SalesBase = ({className}) => {
    
  return (                    
        <SectionsContainer className={className}>        
        <div className="box_container">
            <div className="box">
                <div className="icon">
                    <Variety size={50}/>
                </div>
                <p className="box_title">Variedad</p>
                <p className="box_txt">Contamos con una amplia variedad de juegos inflables de mas de 50 mnodelos diferentes</p>
            </div>
            <div className="box">
                <div className="icon">
                    <Quality size={50}/>
                </div>
                <p className="box_title">Calidad</p>
                <p className="box_txt">Utilizamos lona de excelente calidad y resistencia que nos permite ofrecerle un año de garantía tanto en el juego como en el motor</p>
            </div>
            <div className="box">
                <div className="icon">
                  <Trust size={55}/>
                </div>
                <p className="box_title">Confianza</p>
                <p className="box_txt">Los motores que manejamos son marca Siemens e incluyen 10 mts de cable de uso rudo calibre 14 y clavija blindada. Funcionan de 8 a 10hrs continuas sin problemas.</p>
            </div>
            <div className="box">
                <div className="icon">
                    <Payment size={50}/>
                </div>
                <p className="box_title">Pago</p>
                <p className="box_txt">Cualquier pedido requiere del 50% de anticipo y el 50% restante al momento de entregar el equipo terminado. Aceptamos pagos en efectivo o Tarjetas de Crédito (Visa, Master Card, AMEX).</p>
            </div>
            <div className="box">
                <div className="icon">
                    <Invoice size={50}/>
                </div>
                <p className="box_title">Facturación</p>
                <p className="box_txt">Los precios publicados son más IVA en caso de requerir factura o en pagos con tarjeta de Crédito.</p>
            </div>
        </div>        
        </SectionsContainer>
        
    );
};

const VentaCards = styled(SalesBase)`    
  color: ${colors.white_1};
  width: 95%;
  height: 75vh;  
  margin: 1rem auto;
  border-radius: .7rem;
  position: relative;  
  
  h3{      
    width: 95%;
    font-size: 2.5rem;
    text-align: center;
    text-shadow: 4px 4px 15px ${colors.blue_6};  
  }

  .box_container{
    ${setFlex({y:"stretch"})};
    padding: 1rem;
    text-align: center;    
    overflow: auto;
      
      .box{
        width: 20%;
        margin: 0 1rem;
        border-radius: .8rem;
        padding: 1rem;
        ${elevation[4]};        
      
          .icon{
            margin: 1rem auto;
            width: 95%;              
          }

          .box_title{                
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
          }

          .box_txt{              
            font-size: .9rem;
            text-align: justify;
          }
      }
  }

    ${below.lg`           
      .box_container{
        padding: .5rem;        
        
        .box{
          width: 90%;
          margin: 0 auto;            
        }
      }     
    `};

    ${below.md`      
      ${demotion[4]};
      margin: 3rem auto;      

      h3{      
        font-size: 2rem;      
      }

      .box_container{
        flex-flow: column nowrap;
        padding: 0rem;
        
        .box{
          width: 90%;
          margin: 1.5rem auto;          
        
            .box_txt{                            
              text-align: center;
            }
        }
      }
    `}

    
`;


export default VentaCards;