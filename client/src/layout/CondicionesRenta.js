import React from 'react';
import styled from 'styled-components';
import { colors, below, setFlex } from '../utilities';
import Bill from '../elements/svg/Bill';
import Lighting from '../elements/svg/Lighting';
import Space from '../elements/svg/Space';
import Delivery from '../elements/svg/Delivery';


const CondicionesRentaBase = ({className}) => {
    return (
        <div className={className}>
            <div className="rent_conditions">
                <Bill className="rent_icon" size={55}/>
                <ul className="list">
                    <li className="txt_rent">Precios por evento diario con horario máximo para recoger el mismo día a las 21:30 hrs.</li>
                    <li className="txt_rent">Más IVA en caso de requerir factura.</li>
                </ul>
            </div>
            <div className="rent_conditions">
                <Lighting className="rent_icon" size={55}/>
                <ul className="list">
                    <li className="txt_rent">Contacto de energía eléctrica a una distancia máxima de 20 mts.</li>
                    <li className="txt_rent">No nos conectamos a cajas de fusibles, medidores, diablitos, etc.</li>
                    <li className="txt_rent">Tener buen suministro de electricidad para que los motores funcionen correctamente.</li>
                </ul>
            </div>
            <div className="rent_conditions">
                <Space className="rent_icon" size={55}/>
                <ul className="list">
                    <li className="txt_rent">Espacio suficiente para instalar el juego de acuerdo a las medidas de cada modelo.</li>
                    <li className="txt_rent">Considerar una holgura de al menos 50 cms de cada lado y 30 cms de altura.</li>
                    <li className="txt_rent">De lo contrario no podremos dar el servicio y se cobrará 50% por los costos generados.</li>
                </ul>
            </div>
            <div className="rent_conditions">
                <Delivery className="rent_icon" size={55}/>
                <ul className="list">
                    <li className="txt_rent">Los precios pueden variar dependiendo de la distancia del evento.</li>
                    <li className="txt_rent">Los precios pueden variar en el caso de que sea necesario subir más de 10 escalones.</li>
                </ul>
            </div>

        </div>
    );
};

const CondicionesRenta = styled(CondicionesRentaBase)`
    width: 100%;
    ${setFlex()};
    margin: auto;
    flex-flow: row wrap;
    
    .rent_icon{
        display: inline-block;     
        padding: 0.5rem 0.5rem;
        margin: auto 3.5rem; 
    }

    .list{
        display: inline-block;
        margin-left: 2.5rem;
        list-style-type: none;
    }
        
    .rent_conditions{
        width: 100%;
        margin: 1.5rem 0 0 2.5rem;
    }
    
    .txt_rent{
        color: ${colors.white_1};
        font-size: 1rem;
        margin: 0 0 0 4rem;
        line-height: 1.1rem;
        padding-bottom: 0.7rem;
    }

    ${below.xlg`

        .txt_rent{
            margin: 0 0;
            font-size: 0.9rem;
        }

    `};

    ${below.lg`

        .rent_conditions{
            text-align: center;
            margin-left: 1.5rem;
        }
        
        .list{
            margin-top: 1.5rem;
        }


    `};

    ${below.md`

        .rent_conditions{
            margin-top: 1rem;
        }

        .list{
            margin-left: 0rem;
        }

    `};

    ${below.sm`

        .txt_rent{
            font-size: 1rem;
        }


        .rent_conditions{
            margin-left: 0rem;
        }

    `};

`



export default CondicionesRenta;