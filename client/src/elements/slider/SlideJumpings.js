import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {colors, setFlex, below} from '../../utilities';
import {SliderContainer} from '../Container';
import {SliderLink} from '../Button';
import Jumping from '../svg/Jumping.jsx';

const Jumpings = ({className}) => {
  return (
    <SliderContainer className={className}> 
      <div className="icon"><Jumping size={40}/></div>
      <h3 className="title">Jumpings</h3>

      <div className="txt_box">
        <p className="txt">Tamaños chico, mediano, grande y jumbo</p>
      </div>

      <SliderLink>
          <Link to={'/productos/jumping'}>Explorar</Link>  
      </SliderLink>

      <div className="img_box">
        <img className="img" src="https://res.cloudinary.com/noryan/image/upload/v1596033760/foto_covers/jumping_jumbo.png" alt="jumping"/>
      </div>
    </SliderContainer>
  );
}

const SlideJumpings = styled(Jumpings)`
  background-image: linear-gradient(to right, ${colors.noryan_blue}, ${colors.blue_1}  ); 

  .title{
    width: auto;
    margin: 1rem auto;
    padding-top: 1.5rem;
    padding-left: 10%;
  }

  .txt_box{
    
    .txt{
      text-align: center;      
      text-shadow: 6px 6px 12px rgba(0,0,0,0.4),
                -6px -6px 12px rgb(210, 233, 249, .5);
    }
  }

  .img_box{
    width: 100%;
    ${setFlex({y:"flex-end"})};

    img{
      height: 43vh;
      margin-top: -2rem;
    }
  }

  ${below.md`
    .title{      
      padding-left: 15%;    
    }

    .txt_box{
    
      .txt{        
        font-size: 1.6rem;
      }
    }

    .img_box{
      img{
        height: 40vh;
        margin-top: -2.5rem;
      }
    }
  `}

  ${below.sm`
    .title{      
      padding-left: 25%;
    }

    .txt_box{
    
    .txt{
      margin-top: 0rem;
      font-size: 1.4rem;
    }
  }

    .img_box{
      img{
        height: 33vh;
        margin-top: -1rem;
      }
    }
  `}

  ${below.xsm`
    .title{           
      font-size: 1.5rem;
      padding-left: 30%; 
    }
    .img_box{
      img{
        height: 25vh;
        margin-top: -1rem;
      }
    }
  `}

`;

export default SlideJumpings;
