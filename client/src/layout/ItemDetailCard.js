import React, {useState, useRef} from 'react'
import styled from 'styled-components';
import Modal from '../elements/Modal';
import Reservation from '../layout/Reservation';
import {Button} from '../elements/Button';
import {colors, setFlex, below, absolute, demotion, elevation} from '../utilities';
import Back from '../elements/svg/Back';


function Card({className, nombre, desc, observaciones, precio, medidas, fotoCover, fotos, indice, back, type}) {
    
  const [currentIndex, setCurrentIndex] = useState('');
  const ref = useRef();

  const bookItem = () => {
    console.log('Booking item ... this shpul open modal!!!!');
    ref.current.open();
  }

  return (
    <>
      <div className={className} >        
          <div onClick={back} className="icon"><Back/></div>
          <h2 className="title">{nombre}</h2>
        <div className="container">
          
          <div className="dtl__box">     
            <h3>No. Producto: {indice}</h3>            
            <div className="precio">
              <p>{type === 'venta' ? 'Precio:' : 'Costo por día:'} <span className="price">${precio}</span></p>
            </div>
            <div className="medidas">
              <h4>Medidas</h4>
              <span className="ms">Ancho: <p>{medidas && medidas[0]}m</p> </span>
              <span className="ms">Largo: <p>{medidas && medidas[1]}m</p> </span>
              <span className="ms">Alto: <p>{medidas && medidas[2]}m</p> </span>              
            </div>            
            <h4>Descripción</h4>
            <div className="description">              
              <div className="desc_txt">{desc}</div>              
            </div>                                                       
            <p className="observaciones">{observaciones}</p>
          </div>                  
          
          <div className="thumbnail_box">                      
            <div className="foto_cover">
              <img 
                src={currentIndex === '' ? fotoCover : currentIndex} 
                alt={nombre}/>              
            </div>
                          
            <div className="fotos">
              {fotos && fotos.map( (foto, idx) => 
                <img  
                  key={idx}  
                  src={foto}  
                  alt="thub-pic"                  
                  onClick={ () => setCurrentIndex(foto)}
                  />
              )}
            </div>            
          </div>         
        </div>  
        <div className="book_btn">
          <Button onClick={bookItem}>Reservar</Button>
        </div>        
      </div>
      <Modal ref={ref}>
        <Reservation/>
      </Modal>
      </>
    )
}

const ItemDetailCard = styled(Card)`
  width: 100%;
  margin: 0rem auto;
  padding: 1rem 1.5rem;
  color: ${colors.white_1};
  position: relative;

  .icon{
    ${absolute({ x:"1.5rem", y:"1rem" })};
    cursor: pointer;
  }

  h2{
    width: 100%;
    text-align:center;
    text-transform: uppercase;
    font-size: 1.5rem;
  }
  
  .container{
    ${setFlex({ x:"space-between", y:'flex-start' })};
    position: relative; 

    .dtl__box{        
      width: 48%;
      font-size: .8rem;    
    
    h4{
      font-size: 1.2rem;    
      margin: 1rem 0rem;
    }
    
    .description{
      overflow: auto;
      height: 25vh;
      padding: .9rem;
      border-radius: .7rem;
      ${demotion[1]};

      .desc_txt{
        line-height: 1.5rem;
        text-align: justify;
        margin-bottom: 3rem;
        font-size: 1rem;
        font-weight: 500;
      }
    }   
  
    .medidas{
      ${setFlex({ x:"flex-start"})};
      width: 100%;
      line-height: 1.5rem;      
      padding: 0rem 1rem;
      border-radius: .8rem;
      ${elevation[1]};
      
      h4{
        width: 40%;
        font-size: 1rem;    
        margin: 1rem;
      }
      
      .ms{        
        width: 60%;
        font-weight: 500;
        font-size: 1rem;
        margin-left: 1rem;
        text-align: right;

        p{
          padding: 0rem;
          margin: 0rem; 
          font-weight: normal;          
        }
      }  
    }      
    
    .precio{
      width: 100%;
      font-size: 1rem;      
      text-align: right;
      margin-bottom: 1.5rem;

      p {                    
        letter-spacing: .1rem;
        .price{
          font-weight: bolder;          
        }
      }
    }   

    .observaciones{      
      line-height: 1.1rem;
      margin-top: 2rem; 
      font-weight: 500;   
    }

    
  } /* finish dtl_box */

    .thumbnail_box{      
      width: 48%;
      margin-top: -1rem;      
      
      .foto_cover{
        ${setFlex()};        
        border-radius: .8rem;
        margin-top: -.5rem;
        width: 100%;

        img{          
          height: 29vh;
        }
      }

      .fotos{
        ${setFlex({x:"space-between"})};
        ${elevation[1]};
        padding: .5rem;
        border-radius: .3rem;
        margin: .5rem auto;        

        img{
          height: 2.5rem;
        }
      }      
      
    } /* finish product-pics */
  }

  .book_btn{    
    ${absolute({x:"50%",y:"75%"})};    
    width: 50%;

    button{
      margin: 0 auto;
    }
  }
    
  ${below.md`
    padding: .2rem 1rem;

    .icon{
      ${absolute({ x:"1rem", y:".5rem" })};      
    }

    h2{
      margin-top: 2rem;      
    }

    .container{
      flex-direction: column-reverse;    

      .dtl__box{
        width: 100%;

        h4{
          text-align:center;
          margin: 2rem auto;
        }

        .precio{
          text-align: center;
          margin-bottom: 1rem;

          p {            
            .price{
              font-size: 1.2rem;              
            }
          }
        }
        
        .description{
          
          height: 30vh;
          padding: .3rem;
          border-radius: .7rem;
          ${demotion[1]};

          .desc_txt{
            line-height: 1.5rem;
            text-align: justify;
            margin-bottom: 3rem;
            font-size: 1rem;
            font-weight: 500;
          }
        } 

        .medidas{
          padding: 0rem .5rem;

          .ms{        
            width: 50%;
            font-weight: 500;
            font-size: .8rem;

            p{
              padding: 0rem;
              margin: 0rem; 
              font-weight: normal;      
            }
          }
        }
      }
      
      .thumbnail_box{
        width: 100%;
        margin-top: 1.5rem;
      }    
    }
    .book_btn{
      position: static;      
      width: 100%;

      button{
        margin: 0 auto;
        margin-bottom: 2rem;
      }
    }
  `}
`;

export default ItemDetailCard
