import React from 'react';
import useSlider from '../hooks/useSlider';
import SlideNoryan from '../elements/slider/SlideNoryan';
import SlideInflables from '../elements/slider/SlideInflables';
import SlideFut from '../elements/slider/SlideFut';
import SlideRock from '../elements/slider/SlideRock';
import SlideMaquinitas from '../elements/slider/SlideMaquinitas';
import SlideJumpings from '../elements/slider/SlideJumpings';
import SlideLittle from '../elements/slider/SlideLittle';
import styled from 'styled-components';
import {absolute, colors, below} from '../utilities';

const SliderBase = ({className}) => {
// <SlideNoryan/> , <SlideInflables/>, <SlideFut/>, <SlideRock/>, <SlideMaquinitas/>, <SlideJumpings/>, <SlideLittle/> 
  let sliderComponents = [ <SlideNoryan/> , <SlideInflables/>, <SlideFut/>, <SlideRock/>, <SlideMaquinitas/>, <SlideJumpings/>, <SlideLittle/> ]; 

  const { offset, addItem } = useSlider({
    total: sliderComponents.length,
    enabled: true,
    useLoaded: false,
    speed: 3500
  });
  
  if(!sliderComponents){
    console.log(addItem);
  }
  
  
  return (    
    <div className={className}>
      {sliderComponents.map( (component,idx) => {
          return (
            <div key={idx} className="slide" style={{ transform:`translateX(${offset * -100}%)` }}>
              {component}
            </div>
          )
      })}          
    </div>
  );
}

const Slider = styled(SliderBase)`  
  width: 100%;  
  box-sizing: border-box;
  margin-top: 1rem;
  padding: 0;
  display: flex;
  align-items: center;  
  
  .slide{ 
    min-width: 100%;
    height: 100%;
    position: relative;
    transition: .5s;
    border-radius: .8rem;  
  }

  .slide_btn_left{
    background-color: transparent;
    ${absolute({ y:"50%" })};
    transform: translateY(-50%);
    width: 5%;
    height: 70%;
    cursor: pointer;
    border: none;
    outline: 0;
    border-radius: .8rem;

    &:hover{
      background-color: ${colors.blue_1};
      opacity: .3;
    }

    &:active{
      border: none;
    }

  }

  .slide_btn_right{
    background-color: transparent;
    ${absolute({ y:"50%", xP:"right", x:".5rem" })};
    transform: translateY(-50%);
    width: 5%;
    height: 70%;
    cursor: pointer;
    border: none;
    outline: 0;
    border-radius: .8rem;

    &:active{
      border: none;
    }
  }

  ${below.md`
    margin-top: 2rem;
  `}

  ${below.sm`    
    .slide_btn_left{      
      width: 25%;
      height: 50%;    
    }

    .slide_btn_right{                  
      width: 25%;
      height: 50%;    
    }
`}

`;


export default Slider;
