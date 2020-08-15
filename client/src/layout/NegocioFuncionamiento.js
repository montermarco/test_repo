import React from 'react';
import styled from 'styled-components';
import { colors, setFlex, absolute, below } from '../utilities';


const NegocioFuncionamientoBase = ({className}) => {
    return (
        <div className={className}>            
                <div className="watermark">
                    <img className="icon" alt="" src="https://i.postimg.cc/26Yr81bt/money.png"/>
                </div>
                <ul className="list">
                    <li className="txt_functioning">El primer paso es realizar tu registro completo.</li>
                    <li className="txt_functioning">El registro como promotor no tiene ningún costo.</li>
                    <li className="txt_functioning">El primer servicio que solicites será a precio regular, a partir del segundo recibirás comisión.</li>
                    <li className="txt_functioning">Puedes elegir entre dos esquemas de entrega de los servicios, con distintas comisiones para cada uno.</li>
                    <li className="txt_functioning">Podemos entregar y recolectar nosotros los equipos rentados en tu representación, la comisión es del 15%.</li>
                    <li className="txt_functioning">Recoge y devuelve los equipos en nuestro almacén y tú realiza la entrega directa al cliente, la comisión es del 30%.</li>
                    <li className="txt_functioning">Debes mantener una frecuencia de al menos una renta mensual para conservar tus comisiones.</li>
                    <li className="txt_functioning">Los equipos quedan bajo responsabilidad del promotor, por lo que se recomienda extremar las medidas de seguridad.</li>
                </ul>            

        </div>
    );
};

const NegocioFuncionamiento = styled(NegocioFuncionamientoBase)`
    width: 100%;
    margin: 2rem auto;
    padding: 1rem;
    
    .list{        
        margin: 0 auto;
        padding: 1rem;        
        border-radius: .8rem;
        overflow: auto;

        .txt_functioning{        
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

export default NegocioFuncionamiento;