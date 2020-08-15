import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {colors, setFlex, below, absolute} from '../../utilities';
import {SliderContainer} from '../Container';
import Joy from '../svg/Joy.jsx';
import {SliderLink} from '../Button';

const Maquinitas = ({className}) => {
  return (
    <SliderContainer className={className}> 
      <div className="icon"><Joy size={40}/></div>      
      <h3 className="title">Maquinitas</h3>    
      <div className="img_box">
        <img className="img" src="https://res.cloudinary.com/noryan/image/upload/q_auto,f_auto/v1597360774/foto_covers/arcade_slider.png" alt="maquinitaImg"/>
        <div className="text_box">
          <p className="txt">Consola Xbox y classic Arcade</p>        
        </div> 
      </div>
      <div className="link">
        <SliderLink>
          <Link to={'/items/maquinita'}>Explorar</Link> 
        </SliderLink>
      </div>      
    </SliderContainer>
  );
}

const SlideMaquinitas = styled(Maquinitas)`
  background-image: linear-gradient(to right, ${colors.blue_2}, ${colors.blue_6} );  
  
  .title{
    width: auto;
    margin: 1rem auto;
    padding-top: 1.5rem;
    padding-left: 10%; 
  }

  .img_box{
    width:100%;
    height: auto;
    flex-flow: column nowrap;
    
    img{      
      height: 45vh;      
      margin-bottom: -4rem;
    }

    .text_box{
      width: 40%;
      ${absolute({ x:"45%", y:"40%" })};      

      .txt{    
        text-align: center;
        font-weight: bold;
        text-shadow: 6px 6px 12px rgba(0,0,0,0.4),
                -6px -6px 12px rgb(210, 233, 249, .5);
      }
    }
  }

  .link{
    width: 100%;
    ${absolute({ x:"auto", y:"70%" })};
  }

  ${below.md`
    .title{      
      padding-left: 15%;    
    }
    
    .img_box{      
      ${setFlex({x:"flex-start"})};
      margin: 0 auto;

      img{                
        height: 45vh;
        margin-top: -1rem;
        margin-bottom: 0rem;
      }

      .text_box{
        width: 100%;
        ${absolute({ x:"auto", y:"55%" })};

        .txt{
          font-size: 2rem;
          text-align: center;
        }
      }    
    }    
  `}

  ${below.sm`
    .title{      
      padding-left: 25%;
    }
    
    .img_box{      
      margin: 0 auto;      
      
      img{        
        height: 35vh;
        margin-top: 0rem;
        margin-bottom: -1rem;
      }
      
      .text_box{
        width: 95%;
        ${absolute({ x:"auto", y:"55%" })};
        
        .txt{
          font-size: 1.6rem; 
          text-align: center;          
        }
      }
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
      height: 30vh;
    }
    
    .text_box{
      width: 90%;
      ${absolute({ x:"auto", y:"55%" })};    

      .txt{      
        margin-bottom: 0rem;
        font-size: 1.4rem;
      }
    }
  }
`}
  
`;

export default SlideMaquinitas;
