import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {setFlex, below, absolute, colors} from '../../utilities';
import {SliderContainer} from '../Container';
import {SliderLink} from '../Button';

const Noryan = ({className}) => {
  return (
    <SliderContainer className={className}>     
      <h1 className="title">Inflables, Futbolitos, Rockolas, Maquinitas y mucho más ...!</h1>
      <img src="https://res.cloudinary.com/noryan/image/upload/q_auto,f_auto/v1597360776/foto_covers/noryan_slider.png" alt="noryan"/>     
      <div className="link">
      <p className="txt">CDMX, Estado de México & Cuernavaca</p>
        <SliderLink>
          <Link to={'/items/inflable'} >Explorar</Link>  
        </SliderLink>
      </div>                     
    </SliderContainer>
  );
}

const SlideNoryan = styled(Noryan)`  
  ${setFlex({x:"space-between"})};
  width: 95%;

  .title{
    color: ${colors.white_2};
    font-size:3rem;
    font-weight: bolder;    
    text-align: center;
    text-shadow: 6px 6px 12px rgb(33, 63, 232, 0.9),
            -6px -6px 12px rgb(33, 63, 232, 0.8);
  } 
  
  .txt{      
      width: 100%;
      text-align: center;
      padding: 1rem 0;
      font-size:2.5rem;
      font-weight: 600;
      text-shadow: 6px 6px 12px rgb(33, 63, 232, 0.9),
              -6px -6px 12px rgb(33, 63, 232, 0.8);
  }
  
  .link{
    margin-bottom: 2rem;
  }

  img{    
    ${absolute({x:"auto"})};
    height: 65vh;
    margin-top: 1rem;
    z-index: -1;
  }

  ${below.lg`
    img{
        ${absolute({x:"auto", y:"10%"})};
        height: 55vh;
        margin-top: 1rem;
        z-index: -1;
      }
  `}

  ${below.md`    
    .title{
      width: 95%;
      font-size:2.5rem;
      margin-top: 1.5rem;
    }
   
    .txt{
      font-size:2rem;
    }

    img{
      ${absolute({x:"auto", y:"10%"})};
      height: 45vh;
      margin-top: 1rem;
      z-index: -1;
    }
      
  `}

  ${below.sm`    
    .title{     
      width: 100%;
      font-size: 1.7rem;
      margin-top: 1.5rem;
      line-height: 2.2rem;
    }
   
    .txt{
      width: 80%;
      font-size:1.5rem;
    }

    img{
      ${absolute({x:"auto", y:"20%"})};
      height: 30vh;
      width: auto;
      margin-top: 1rem;
      z-index: -1;
      transform: scale(.85)
    }
  `}

  ${below.xsm`
    .title{     
      width: 100%;
      font-size:1.7rem;
      margin-top: 1.5rem;
      line-height: 2.2rem;
    }
   
    img{
      ${absolute({x:"auto", y:"20%"})};
      height: 30vh;
      width: auto;
      margin-top: 1rem;
      z-index: -1;
      transform: scale(.77)
    }
    
  `}
`;

export default SlideNoryan;
