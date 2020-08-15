import React from 'react';
import styled from 'styled-components';
import {below} from '../utilities';

const Load = ({className}) => {
 
  return (
    <div className={className}>      
      <figure>
        <img src="https://kmtonline.com.au/resources/front/landing/images/loader.gif" alt="loader"/>
      </figure>
    </div>
  );
};

const Loader = styled(Load)`  
  max-width: 90%;
	height: 90px;
	position: fixed;
	top:0;
	bottom:0;
	left:0;
	right:0;
	margin:auto;  

  figure{
    width:50px;
	  height:50px;
	  margin:0 auto;
    transform: translate(-35vh, -35vh)
  }
  img{
    transform: scale(.4)
  }

  ${below.md`    
    figure{
      transform: translate(-50vh, -35vh)
    }
  `}

  ${below.sm`    
    figure{
      transform: translate(-45vh, -35vh)
    }
  `}  
`;

export default Loader;