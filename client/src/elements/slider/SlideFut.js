import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {colors, setFlex, below  } from '../../utilities';
import {SliderContainer} from '../Container';
import Fut from '../svg/Fut.jsx';
import {SliderLink} from '../Button';

const Futbolito = ({className}) => {
  return (
    <SliderContainer className={className}>
      <div className="icon"><Fut size={40}/></div>
      <h3 className="title">Futbolitos</h3>      
      
      <div className="img_box">
        
        <img className="img" src="https://res.cloudinary.com/noryan/image/upload/q_auto,f_auto/v1597360774/foto_covers/futbolitos_slider.png" alt="futbolito"/>
        <p className="txt">Futbolitos tamaño infantil y para adulto </p>
        
        <div className="link">
          <SliderLink>
            <Link to={'/items/futbolito'}>Explorar</Link>
          </SliderLink>
        </div>
      
      </div>            
    </SliderContainer>
  );
}

const SlideFut = styled(Futbolito)`
  background-image: linear-gradient(to right, ${colors.blue_6}, ${colors.blue_2});
  
  .title{
    width: auto;
    margin: 1rem auto;
    padding-top: 1.5rem;
    padding-left: 10%; 
  }

  .img_box{
    width:100%;
    height: auto;    
    ${setFlex()};
    flex-flow: column nowrap;
    
    img{      
      height: 40vh;
    }

    .txt{      
      text-align: center;
      text-shadow: 6px 6px 12px rgba(0,0,0,0.4),
              -6px -6px 12px rgb(210, 233, 249, .5);
    }
      
  }
  

  ${below.md`
    .title{      
      padding-left: 15%;    
    }
    
    .img_box{
      margin: 0 auto;    
      
      img{                
        height: 35vh;
        margin-top: 2rem;
      }

      .txt{
        margin-top: -1.5rem;
        width: 100%;
        font-size: 1.8rem;
      }     
    }

    .link{     
      margin-top: -1.5rem;
    }
  `}

  ${below.sm`
    .title{      
      padding-left: 25%;
    }

    .img_box{      
      margin: 0 auto;
      
      img{
        height: 25vh;
      }

      .txt{
        width: 90%;
        font-size: 1.6rem;
        margin-top: 0rem;
      }     
    }  

    .link{     
      margin-top: -1.5rem;
    }
  `}

  ${below.xsm`
    .title{           
      font-size: 1.5rem;
      padding-left: 30%; 
    }

    .img_box{      
      margin: 0 auto;
      
      img{
        height: 20vh;
      }

      .txt{
        width: 90%;
        font-size: 1.4rem;
        margin-top: -1rem;
      }     
    } 

    .link{
      margin-top: -1.5rem;
    } 
  `}
`;

export default SlideFut;
