import React from 'react';
import styled from 'styled-components';
import { colors, setFlex, absolute, below } from '../utilities';


const NegocioRegistroBase = ({className}) => {
    return (
        <div className={className}>            
                <div className="watermark">
                    <img className="icon" alt="" src="https://i.postimg.cc/26Yr81bt/money.png"/>
                </div>
                <ul className="list">
                    <li className="txt_register">Toda la documentación debe enviarse por vía electrónica (e-mail, whatsapp, facebook, etc).</li>
                    <li className="txt_register">Identificación oficial vigente y legible (INE, Pasaporte, Cédula Profesional).</li>
                    <li className="txt_register">Comprobante de domicilio con antiguedad máxima de tres meses.</li>
                    <li className="txt_register">Tres referencias personales que avalen conocerlo y puedan validar su domicilio.</li>
                </ul>
        </div>
    );
};

const NegocioRegistro = styled(NegocioRegistroBase)`
      width: 100%;
    margin: 2rem auto;
    padding: 1rem;
    
    .list{        
        margin: 0 auto;
        padding: 1rem;        
        border-radius: .8rem;
        overflow: auto;

        .txt_register{        
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

export default NegocioRegistro;