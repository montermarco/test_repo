import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {setFlex, below, colors, absolute} from '../../utilities';
import {SliderContainer} from '../Container';
import Castle from '../svg/Castle.jsx';
import {SliderLink} from '../Button';

const Inflables = ({className}) => {
  return (
    <SliderContainer className={className}>    
      <div className="icon"><Castle size={40}/></div>      
      <h3 className="title">Juegos Inflables</h3>
      <div className="img_box">
        <img className="img" src="https://res.cloudinary.com/noryan/image/upload/v1595979077/foto_covers/circuito_junior.png" alt="inflable"/>
      </div>
      
      <div className="text_box">
        <p className="txt">Más de 60 modelos diferentes</p>
        <p className="txt">Desde $600 por evento</p>
      </div> 
      
      <div className="link">
        <SliderLink>
          <Link to={'/items/inflable'}>Expolorar</Link> 
        </SliderLink>
      </div>

    </SliderContainer>
  );
}

const SlideInflables = styled(Inflables)`  
  background-image: linear-gradient(to right, ${colors.blue_3}, ${colors.noryan_blue});
  position: relative;
  
  .title{
    width: auto;
    margin: 1rem auto;
    padding-top: 1.5rem;
    padding-left: 10%;
  }

  .img_box{
    height: 50%;
    ${setFlex({x:"flex-end"})};

    img{
      height: 45vh;
      margin-right: 2rem;
    }
  }

  .text_box{
    ${absolute({ x:"2rem", y:"30%" })};

    .txt{
      margin-bottom: 1rem;
      text-shadow: 6px 6px 12px rgba(0,0,0,0.4),
              -6px -6px 12px rgb(210, 233, 249, .5);
    }
  }

  ${below.md`    
    .title{            
      padding-left: 20%;
    }

    .img_box{          
      ${setFlex()};

      img{
        height: 40vh;
        margin-right: 0rem;
      }
    }

    .text_box{
      position: static;      
      line-height: 1.5rem;
      margin-top: -2.5rem;

      .txt{
        margin-top: .5rem;
        font-size: 1.8rem;
      } 
    }
    
    .link{
      position: static;
      margin: 0 auto;
      margin-top: 2rem;
    }
  `}

  ${below.sm`    
    .title{      
      padding-left: 25%;
      font-size: 1.8rem;
    }

    .img_box{
      margin-top: -1rem;

      img{
        height: 30vh;
      }
    }

    .text_box{
      position: static;
      width: 97%;
      line-height: 1.5rem;      
          
      .txt{
        margin-top: 0rem;
        font-size: 1.5rem;
      } 
    }    
  `}

${below.xsm`
    .title{           
      font-size: 1.4rem;
      padding-left: 30%; 
    }
    .img_box{
      margin-top: -2rem;

      img{
        height: 25vh;
      }
    }
    .text_box{
              
      .txt{
        margin-top: -1rem;
        font-size: 1.2rem;
      } 
    }   
  `}

`;

export default SlideInflables;
