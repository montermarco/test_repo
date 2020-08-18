import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {setFlex, below, colors, absolute} from '../../utilities';
import {SliderContainer} from '../Container';
import LittleTike from '../svg/LittleTike.jsx';
import {SliderLink} from '../Button';

const LittleT = ({className}) => {
  return (
    <SliderContainer className={className}>    
      <div className="icon"><LittleTike size={40}/></div>      
      <h3 className="title">Little Tikes</h3>
      <div className="img_box">
        <img className="img" src="https://res.cloudinary.com/noryan/image/upload/q_auto,f_auto/v1597360775/foto_covers/littletike_slider.png" alt="liltike"/>
      </div>
      
      <div className="text_box">
        <p className="txt">Para los mas pequeños</p>
        <p className="txt">$600 por evento</p>
      </div> 
      
      <div className="link">
        <SliderLink>
          <Link to={'/productos/little_tike'}>Expolorar</Link> 
        </SliderLink>
      </div>

    </SliderContainer>
  );
}

const SlideLittle = styled(LittleT)`  
  background-image: linear-gradient(to right, ${colors.blue_6}, ${colors.noryan_blue});
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
      height: 50vh;
      margin-right: 4rem;
    }
  }

  .text_box{
    width: 100%;
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
      width: 100%;
      ${absolute({ x:"auto", y:"45%" })};
            
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
      font-size: 2rem;
    }

    .img_box{
      img{
        height: 30vh;
      }
    }

    .text_box{
      width: 100%;
      ${absolute({ x:"auto", y:"55%" })};
          
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
    .text_box{
                
      .txt{
        margin-top: 0rem;
        font-size: 1.3rem;
      } 
    }   
  `}

`;

export default SlideLittle;
