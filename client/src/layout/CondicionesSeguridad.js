import React from 'react';
import styled from 'styled-components';
import { colors, below, setFlex } from '../utilities';
import Interior from '../elements/svg/Interior';
import Exterior from '../elements/svg/Exterior';
import Location from '../elements/svg/Location';
import Id from '../elements/svg/Id';


const CondicionesSeguridadBase = ({className}) => {
    return (
        <div className={className}>
            <div className="security_conditions">
                <Interior className="security_icon" size={55}/>
                <div className="list">
                    <li className="txt_security">Por ningún motivo instalamos juegos en casas deshabitadas.</li>
                    <li className="txt_security">Servicios en área común (explanadas, patios, etc.) necesitaremos verificar que el cliente es residente.</li>
                    <li className="txt_security">En caso de no poder realizar esta verificación el servicio no podrá llevarse a cabo.</li>
                </div>
            </div>
            <div className="security_conditions">
                <Exterior className="security_icon" size={55}/>
                <div className="list">
                    <li className="txt_security">En lugares públicos (parques, iglesias, oficinas, etc.) se solicitará garantizar la integridad de nuestros equipos.</li>
                    <li className="txt_security">En caso de que no se nos proporcione lo mencionado anteriormente no se podrá dar el servicio.</li>
                </div>
            </div>
            <div className="security_conditions">
                <Location className="security_icon" size={55}/>
                <div className="list">
                    <li className="txt_security">En lugares rentados (salones, escuelas, etc.) se solicitarán datos de contacto del responsable del lugar.</li>
                    <li className="txt_security">Solicitaremos apoyo al responsable del lugar para garantizar la seguridad de nuestros equipos.</li>
                    <li className="txt_security">En caso de que en el lugar no muestren disposición para tomar dichas medidas no se podrá dar el servicio.</li>
                </div>
            </div>
            <div className="security_conditions">
                <Id className="security_icon" size={55}/>
                <div className="list">
                    <li className="txt_security">Nuestro personal se identificará al momento de la instalación del servicio y al momento de retirarlo.</li>
                    <li className="txt_security">Le solicitamos no permita retirar ningún equipo a quién no se identifique como empleado nuestro.</li>
                </div>
            </div>

        </div>
    );
};

const CondicionesSeguridad = styled(CondicionesSeguridadBase)`
    width: 100%;
    ${setFlex()};
    margin: auto;
    flex-flow: row wrap;

    
    .security_icon{
        display: inline-block;   
        padding: 0.5rem 0.5rem;
        margin: auto 3.5rem; 
    }

    .list{
        display: inline-block;
        margin-left: 2.5rem;
        list-style-type: none;
    }
        
    .security_conditions{
        width: 100%;
        margin: 1.5rem 0 0.5rem 2.5rem;
    }
    
    .txt_security{
        color: ${colors.white_1};
        font-size: 1rem;
        margin: 0 0 0 4rem;
        line-height: 1.1rem;
        padding-bottom: 0.7rem;
    }

    ${below.xlg`

        .txt_security{
            margin: 0 0;
            font-size: 0.9rem;
        }


    `};

    ${below.lg`

        .security_conditions{
            text-align: center;
            margin-left: 1.5rem;
        }

        .txt_security{
            font-size: 1rem;
        }

        .list{
            margin-top: 1.5rem;
        }

    `};

    ${below.md`

        .security_conditions{
            margin-top: 1rem;
        }

        .list{
            margin-left: 0rem;
        }

    `};

    ${below.sm`

        .security_conditions{
            margin-left: 0rem;
        }

    `};

`



export default CondicionesSeguridad;