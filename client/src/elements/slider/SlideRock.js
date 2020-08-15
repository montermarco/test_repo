import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {setFlex, colors, absolute, below} from '../../utilities';
import {SliderContainer} from '../Container';
import Micro from '../svg/Micro.jsx';
import {SliderLink} from '../Button';


const Rockolas = ({className}) => {
  return (
    <SliderContainer className={className}>        
      <div className="icon"><Micro size={40}/></div>      
      <h3 className="title">Rockolas</h3>
      
      <div className="img_box">
        <img className="img" src="https://res.cloudinary.com/noryan/image/upload/v1596843329/foto_covers/rockola_slider.png" alt="rockola"/>
      </div>      
      <div className="text_box">
        <p className="txt">Pantalla touch, con iluminación y más de 150 mil canciones & videos</p>
      </div>
      <div className="link">
        <SliderLink>
          <Link to={'/items/rockola'}>Explorar</Link> 
        </SliderLink>
      </div>
    </SliderContainer>
  );
}

const SlideRock = styled(Rockolas)`
  background-image: linear-gradient(to right, ${colors.blue_3}, ${colors.noryan_blue} );
  position: relative;

  .title{
    width: auto;
    margin: 1rem auto;
    padding-top: 1.5rem;
    padding-left: 13%;    
  }

  .img_box{
    height: 70%;
    width: 20%;
    ${setFlex({x:"flex-start"})};    
    margin-left: 2rem;

    img{
      height: 50vh;
      margin-left: 3rem;
    }
  }

  .text_box{
    width: 50%;
    ${absolute({ x:"45%", y:"30%" })};

    .txt{
      margin-bottom: 5rem;
      text-shadow: 6px 6px 12px rgba(0,0,0,0.4),
              -6px -6px 12px rgb(210, 233, 249, .5);
    }
  }

  .link{
    ${absolute({ x:"50%", y:"60%" })};
  }
  
  ${below.md`
    
    background-color:red;
    .title{            
      padding-left: 20%;      
    }

    .img_box{
      height: 70%;      
      ${setFlex({x:"flex-start"})};    
      

      img{        
        margin-left: 1rem;
      }
    }

    .text_box{
      width: 50%;      

      .txt{
        margin-bottom: 5rem;
        font-size: 1.8rem;           
      }
    }
    .link{
      ${absolute({ x:"50%", y:"70%" })};
    }
    
  `}

${below.sm`
  .title{    
    padding-left: 25%; 
  }

  .img_box{
    height: 40vh; 
    width: 100%;    
    margin-left: .5rem;

    img{      
      margin: 0 auto;      
    }
  }

  .text_box{
    width: 100%;
    ${absolute({ x:"auto", y:"50%" })};
    margin: 0 auto;
    
    .txt{      
      margin-top: -1rem;
      font-size: 1.6rem;
      font-weight: 600;
    }
  }

  .link{
    width: 100%;
    ${absolute({ x:"auto", y:"70%" })};
  }
`}

${below.xsm`
  .title{           
    font-size: 1.5rem;
    padding-left: 30%; 
  }

  .img_box{
    height: 60%;    
  }

  .text_box{
    width: 100%;
    ${absolute({ x:"auto", y:"50%" })};    

    .txt{      
      margin-bottom: 0rem;
      font-size: 1.4rem;
    }
  }
  
`}
`;

export default SlideRock;
