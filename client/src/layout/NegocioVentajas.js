import React from 'react';
import styled from 'styled-components';
import { colors, setFlex, absolute, below } from '../utilities';


const NegocioVentajasBase = ({className}) => {
    return (
        <div className={className}>            
                <div className="watermark">
                    <img className="icon" alt="" src="https://i.postimg.cc/26Yr81bt/money.png"/>
                </div>
                <ul className="list">
                    <li className="txt_advantages">Genera ingresos de inmediato rentando nuestros juegos con una comisión por cada renta.</li>
                    <li className="txt_advantages">Puedes ofrecer todos los juegos de nuestro catálogo como si fueran tuyos.</li>
                    <li className="txt_advantages">No necesitas invertir ni un peso para poder empezar a generar ganacias.</li>
                    <li className="txt_advantages">Puedes ofrecerlos entre familiares, amigos, compañeros y así crear tu cartera de clientes.</li>
                    <li className="txt_advantages">Compra tus propios juegos y sigue ofreciendo todos los de nuestro catálogo para incrementar tus ganancias.</li>
                    <li className="txt_advantages">Invierte en juegos propios cuando ya has experimentado y comprobado que es lo que tus clientes prefieren.</li>
                    <li className="txt_advantages">Si ya tienes un negocio relacionado con fiestas, amplia tu oferta de servicios sin arriesgarte a invertir.</li>
                </ul>            

        </div>
    );
};

const NegocioVentajas = styled(NegocioVentajasBase)`    
    width: 100%;
    margin: 2rem auto;
    padding: 1rem;
    
    .list{        
        margin: 0 auto;
        padding: 1rem;        
        border-radius: .8rem;
        overflow: auto;

        .txt_advantages{        
          color: ${colors.white_1};
          font-size: 1.1rem;
          font-weight: 600;
          list-style-type: none;
          padding: .7rem;
        }
    }

    .watermark{        
        ${absolute({x:"auto", y:"20%"})};
        ${setFlex()};
        width: 95%;
        padding: .5rem;
        opacity: 0.07;

        img{
          height: 30vh;
          width: auto;
        }        
    }


    ${below.md`      

        .list{                      
          margin: .5rem auto;
          padding: .5rem;
          width: 100%;

          .txt_advantages{        
            color: ${colors.white_1};
            font-size: 1.1rem;
            font-weight: 600;
            list-style-type: none;
            padding: .7rem;
          }
        }


    `};

    ${below.sm`

        .watermark{
            margin-top: 6rem;
            margin-left: 0.5rem;
        }

        .icon{
            width: 80%;
        }

    `};

`

export default NegocioVentajas;