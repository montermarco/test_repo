import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import {colors, below} from '../../utilities';
import ConditionsMenu from '../../layout/ConditionsMenu';
import CondicionesRenta from '../../layout/CondicionesRenta';
import CondicionesSeguridad from '../../layout/CondicionesSeguridad';
import CondicionesPago from '../../layout/CondicionesPago';
import CondicionesCancelacion from '../../layout/CondicionesCancelacion';
import {SectionsContainer} from '../../elements/Container';


const CondicionesBase = ({className}) => {
    return (
        <SectionsContainer className={className}>
                <h2 className="condiciones">Condiciones</h2>
            <ConditionsMenu/>
            <div className="conditions_list">
              <Route exact path={`/condiciones`} component={CondicionesRenta}/>
              <Route exact path={`/condiciones/seguridad`} component={CondicionesSeguridad}/>
              <Route exact path={`/condiciones/pago`} component={CondicionesPago}/>
              <Route exact path={`/condiciones/cancelaciones`} component={CondicionesCancelacion}/>
            </div>
        </SectionsContainer>
    );
};

const Condiciones = styled(CondicionesBase)`

    .condiciones{
        font-size: 3rem;
        text-align:center;
        font-weight: 700;
        letter-spacing: .4rem;
        text-shadow: 4px 4px 15px ${colors.blue_6};
        color: ${colors.white_1};  
        margin: 0.5rem auto;
    }

    .conditions_list{
        position: relative;
        margin: auto;
        width: 75%;
        display: flex;      
    }

    ${below.lg`

        .condiciones{
            font-size: 2rem;
        }

        .conditions_list{
            width: 95%;
        }
    `};

    ${below.md`
        margin-top: 2.5rem;

        .condiciones{
            font-size: 1.5rem;
        }

    `};

    ${below.xsm`
        
        .condiciones{
            font-size: 1.2rem;
        }

    `};

`

export default Condiciones; 
