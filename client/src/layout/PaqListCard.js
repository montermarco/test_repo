import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {colors, setFlex, absolute, below } from '../utilities';
import {Size} from '../elements/Icons';

const Card = ({ 
  className, 
  nombre, 
  tamaño, 
  precio, 
  paquete, 
  fotoCover,
//   category, 
  id 
  }) => {

    return (
        <div className={className}>
          <div>
            <Link className="item_link"to={`/paquetes/${id}`}>
              <div className="item__card">
                <div className="cover__img">
                  <img 
                    src={fotoCover} 
                    alt="" 
                    className="card__img"                  
                    />
                  {
                    paquete ? 
                    <span className="tags">
                      <span className="card__tag">paquete</span>
                    </span> : null
                  }
                </div>
                <h4 className="card__tittle">{nombre}</h4>     
                <div className="card__specs">                
                  <p className="item__size">
                    <Size size="10"/>{tamaño}
                  </p>
                  <p className="item__price">$ {precio}</p>
                </div>
              </div>
            </Link>
          </div>                
        </div>
    );
};

const PaqListCard = styled(Card)`
  width: 25%;
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;

  .item_link{
    text-decoration: none;
  }
      
  .item__card {        
    position: relative;
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;    

      .cover__img {
        padding-bottom: 81.88%;
        position: relative;        
        -moz-box-sizing: content-box;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        display: block;
        overflow: hidden;
        height: 0;        

          .card__img{
            max-width: 100%;
            width: 100%;
            height: auto;
            border-radius: .4rem;                    
          }

          .tags{
            display: block;            
            text-align: right;            
            z-index: 2;
            ${absolute({ 
              yP:"bottom", 
              y:".6rem", 
              xP:"right", 
              x:"1.2rem" 
            })};

              .card__tag{
                text-transform: uppercase;
                background-color: ${colors.blue_1};
                color: ${colors.white_1};
                padding: .2rem .4rem;
                display: inline-block;
                margin-left: .6rem;
                margin-bottom: .6rem;
                font-size: .4rem;
                font-weight: 700;
                border-radius: .4rem;                
              }
          }
      }

      .card__tittle{        
        color: ${colors.white_1};                   
        text-transform: capitalize;
        font-size: 0.8rem;
        font-weight: 700;
        margin-left: .5rem;
        margin-bottom: 0;        
      }

      .card__specs{
        margin-left: .3rem;
        color: ${colors.white_1};
        display: block;        
        flex: 1 0 auto; 
        font-weight: bold;
        ${setFlex({ x:"space-between" })};        

        .item__size{
          font-size: 0.7rem;
          text-transform: capitalize;
        }
        .item__price{
          font-size: 0.8rem;
          margin-right: .5rem;
        }
      }
  }    

  ${below.sm`        
    width: 100%;
    margin-bottom: 1.5rem;
    ${setFlex()};                
  `};


`;

export default PaqListCard;

