import styled from 'styled-components';
import { colors, setFlex, demotion, below, above, elevation, absolute } from '../utilities';

export const Wrapper = styled.div`    
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(${colors.blue_1}, ${colors.blue_5});    
    overflow: auto;
`;

export const RentContainer = styled.div`
    position: relative;
    width: 100%;    
    ${setFlex({ x:"space-around", y:'flex-start' })};

    .item_list{ /*  */      
        position: relative;
        width: 85%;    
        margin: 1rem 1rem;
        margin-right: 1rem;
        overflow: auto;          
    }    

    ${below.md`      
      justify-content: center;
      flex-flow: column nowrap;

      .item_list{        
        width: 95%;
        margin: -1.5rem auto;
        overflow: auto;        
      }

    `};
    
`;

export const ItemListContainer = styled.div`    
    width: 100%;
    height: 60vh;
    padding-top: 2rem;
    padding-left: 1rem;
    border-radius: 1.5rem;
    overflow: auto;
    flex-flow: row wrap;
    ${setFlex({ x:"flex-start", y:"flex-start" })};    
    ${demotion[3]};
    position: relative;
    
    h3{
      display: none;
    }

    ${ ({ type }) => {    
      if(type === 'venta'){
          return `
          height: 65vh;
          padding-top: 0rem;
          
          
          h3{
              display: block;
              width: 100%;
              margin: 1rem auto;
              color: ${colors.white_1};
              text-align: center;
              font-size: 1.5rem;
              font-weight: semi-bold;
              text-transform: capitalize;
            }       
            
          `;
      }
  }}

    ${above.lg`
      height: 70vh;
    `}

    ${below.md`        
        h3{
          display: block;
          width: 100%;
          margin: 1.5rem auto;
          color: ${colors.white_1};
          text-align: center;
          font-size: 1.5rem;
          font-weight: semi-bold;
          text-transform: capitalize;
        }
    `};

    ${below.sm`        
        ${setFlex({ x:"space-between", y:"flex-start" })};
        padding-left: 0;
        ${demotion[2]};
        padding-top: 0; 
        overflow: auto;
    `};

    ${below.xsm`
      height: 45vh;
    `};


    @media all and (max-width: 1280px) and (min-width: 768px) and (orientation: portrait){          
      height: 75vh;
    }

`;

export const ItemDetailContainer = styled.div`
    position: relative;
    width: 100%;
    height: 65vh;
    border-radius: 1.5rem;
    overflow: auto;
    ${demotion[2]};
`;

export const PaqContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 9.1rem 1rem 1rem 1rem;
    ${setFlex({ x:"space-around", y:'flex-start' })};


    .paquetes_list{
        position: relative;
        width: 95%;    
        margin: 1rem 1rem;
    }


    ${below.md`
    
      height: 65vh;

    `};

    ${below.sm`

      height: 58vh;

    `};


`;

export const PaqListContainer = styled.div`
    width: 100%;
    height: 65vh;    
    flex-direction: row;
    flex-wrap: wrap;
    ${demotion[2]};
    padding-top: 2rem;
    padding-left: 1rem;
    border-radius: 1.5rem;
    ${setFlex({ x:"flex-start", y:"flex-start" })};
    overflow: auto;

    ${below.lg`
  
      height: 55vh;

    `};

    ${below.sm`        
        ${setFlex({ x:"flex-start", y:"flex-end" })};
        flex-flow: column nowrap;
        ${demotion[2]};
        padding-top: 0; 
        height: 54vh;

    `};

    ${below.xsm`
      height: 45vh;
    `};

    @media all and (max-width: 1280px) and (min-width: 768px) and (orientation: portrait){          
      height: 75vh;
    }


`;

export const PaqDetailContainer = styled.div`
    position: relative;
    width: 100%;
    height: 65vh;        
    border-radius: 1.5rem;
    overflow: auto;    
    ${demotion[2]};
`;

export const SectionsContainer = styled.div`
    width: 100%;
    height: 75vh;    
    position: relative;
    overflow: auto;   
    
`; 

export const Space = styled.div`    
    height: ${props => props.h || '3rem' };
    width: ${props => props.w || '100%' };    
`;

export const SliderContainer = styled.div`  
  position: relative;
  color: ${colors.white_1};
  width: 98%;
  height: 70vh;  
  margin: 1rem auto;
  border-radius: .7rem;
  ${elevation[4]};
  flex-flow: column nowrap;
  
  /*
  
   */
  .icon{    
    ${absolute({ x:"2rem", y:"2rem" })};
  }

  .title {    
    color: ${colors.txt_light};  
    font-size: 2.5rem;
    width: 70%;
    margin: 0 auto;    
    line-height: 3.5rem;
    text-shadow: 6px 6px 12px rgba(0,0,0,0.4),
              -6px -6px 12px rgb(210, 233, 249, .5);
  }

  .txt{
    width: 90%;
    font-size: 2rem;
    font-weight: 600;    
    margin: 0 auto;
    
  }

  ${below.md`
    .txt{
      margin: 1.5em auto 0rem;
      width: 100%;
      font-size: 1.4rem;
      text-align: center;
      margin-bottom: 2rem;
    }
  `}
`;

export const AuthContainer = styled.div`
    width: 100%;
    height: 60vh;    
    ${setFlex()};
    flex-flow: column nowrap;
   
    .logo{
      position: relative;
      background-image: url('https://i.postimg.cc/tR2VhhzY/turtle-sm.png');
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;
      height: 3.5rem;
      margin-top: 3rem;           
    }
  `;

