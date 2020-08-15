import React from 'react';
import styled from 'styled-components';
import { colors, below, setFlex } from '../utilities';
import Cancel from '../elements/svg/Cancel';
import DateChange from '../elements/svg/DateChange';
import Change from '../elements/svg/Change';
import Space from '../elements/svg/Space';


const CondicionesCancelacionBase = ({className}) => {
    return (
        <div className={className}>
            <div className="cancel_conditions">
                <Cancel className="cancel_icon" size={55}/>
                <div className="list">
                    <li className="txt_cancel">En caso de cancelación del evento ningún anticipo será reembolsable.</li>
                    <li className="txt_cancel">Lo anterior es independientemente de la anticipación con que se realice la cancelación.</li>
                </div>
            </div>
            <div className="cancel_conditions">
                <DateChange className="cancel_icon" size={55}/>
                <div className="list">
                    <li className="txt_cancel">En cambios de fecha contratada, no habrá penalización cuando se realicen con al menos 5 día de anticipación.</li>
                    <li className="txt_cancel">En caso contrario se sancionará con el 50% del anticipo sin excepción.</li>
                </div>
            </div>
            <div className="cancel_conditions">
                <Change className="cancel_icon" size={55}/>
                <div className="list">
                    <li className="txt_cancel">En cambios de modelo contratado, no habrá penalización cuando se realicen con al menos 3 días de anticipación.</li>
                    <li className="txt_cancel">Todo cambio de juego esta sujeto a disponibilidad.</li>
                </div>
            </div>
            <div className="cancel_conditions">
                <Space className="cancel_icon" size={55}/>
                <div className="list">
                    <li className="txt_cancel">Si al instalar el cliente no cuenta con espacio suficiente, será considerará como cancelación.</li>
                    <li className="txt_cancel">Cualquier anomalía en el suministro de energía electrica será responsabilidad del cliente.</li>
                </div>
            </div>

        </div>
    );
};

const CondicionesCancelacion = styled(CondicionesCancelacionBase)`
    width: 100%;
    ${setFlex()};
    margin: auto;
    flex-flow: row wrap;

    
    .cancel_icon{
        display: inline-block;    
        padding: 0.5rem 0.5rem;
        margin: auto 3.5rem;  
    }

    .list{
        display: inline-block;
        margin-left: 1rem;
        list-style-type: none;
    }
        
    .cancel_conditions{
        width: 100%;
        margin: 1.5rem 0 0.5rem 2.5rem;
    }
    
    .txt_cancel{
        color: ${colors.white_1};
        font-size: 1rem;
        margin: 0 0 0 4rem;
        line-height: 1.1rem;
        padding-bottom: 0.7rem;
    }

    ${below.xlg`

        .txt_cancel{
            margin: 0 0;
            font-size: 0.9rem;
        }

    `};

    ${below.lg`

        .cancel_conditions{
            text-align: center;
            margin-left: 1.5rem;
        }

        .txt_cancel{
            font-size: 1rem;
        }

        .list{
            margin-top: 1.5rem;
        }

    `};

    ${below.md`

        .cancel_conditions{
            margin-top: 1rem;
        }

        .list{
            margin-left: 0rem;
        }

    `};

    ${below.sm`

        .cancel_conditions{
            margin-left: 0.5rem;
        }

    `};

`

export default CondicionesCancelacion;