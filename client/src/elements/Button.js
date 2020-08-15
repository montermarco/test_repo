import styled from 'styled-components';
import {elevation, colors, demotion, setFlex, below} from '../utilities';

export const Button = styled.button`
  background-color: ${colors.blue_1};
  color: ${colors.white_1};
  border: none;
  outline: none;  
  font-size: .8rem;
  letter-spacing: .1rem;  
  border-radius: 1.2rem;
  text-decoration: none;
  cursor: pointer;
  padding: auto 2rem;
  width: ${props => props.w || "8rem" };
  height: ${props => props.h || "2rem" };
  ${props =>
    `margin: ${props.mt || 0} ${props.mr || 0} ${props.mb || 0} ${props.ml || 0}}`};  
  ${setFlex()};
  ${elevation[2]};
    
    &:hover {
      ${elevation[4]};
    }
    &:active {
      ${demotion[2]};
      color: ${colors.blue_1};
    }
`;

export const TopBarButton = styled(Button)`
  color: ${colors.white_1};
  border-radius: .4rem;
  width: 6.3rem;
  height: 1.7rem;

`;

export const DownloadButton = styled(Button)`  
  color: ${colors.white_1};
  border-radius: .4rem;
  width: 13rem;
  height: 5rem;
`;


export const SliderLink = styled(Button)`
  background-color: ${colors.blue_6};
  width: 15rem;
  height: 2.5rem;            
  z-index: 100;
  margin: 2rem auto;
  ${elevation[4]};

  a{
    color: ${colors.white_1};
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: .3rem; 
  }

  ${below.md`
    width: 15rem;
  `}

  ${below.sm`
      width: 15rem;
   `}
`;

export const AuthButton = styled(Button)`
  margin: 1rem auto;
  margin-top: 2rem;
  color: ${colors.white_1};
`;
