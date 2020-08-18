import React from 'react';
import styled from 'styled-components';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import {colors, below } from '../../utilities';
import BusinessMenu from '../../layout/BusinessMenu';
import NegocioVentajas from '../../layout/NegocioVentajas';
import NegocioFuncionamiento from '../../layout/NegocioFuncionamiento';
import NegocioRegistro from '../../layout/NegocioRegistro';
//import NegocioCatalogo from '../../layout/NegocioCatalogo';
import {SectionsContainer} from '../../elements/Container';
import VentaCards from '../../layout/VentaCards';

const NegocioBase = ({className}) => {
    
    let {url} = useRouteMatch();
    
    return (
        <SectionsContainer className={className}>
            <h2 className="negocio">Inicia tú Propio Negocio</h2>
            <BusinessMenu/>
            <div className="negocio_list">
              <Switch>
                <Route exact path={`${url}/ventajas`} component={NegocioVentajas}/>
                <Route exact path={`${url}/funcionamiento`} component={NegocioFuncionamiento}/>
                <Route exact path={`${url}/registro`} component={NegocioRegistro}/>
                <Route exact path={`${url}/beneficios`} component={VentaCards}/>
              </Switch>
            </div>
        </SectionsContainer>
    );
};

const Negocio = styled(NegocioBase)`

    .negocio{
        font-size: 3rem;
        text-align:center;
        font-weight: 700;
        letter-spacing: .4rem;
        text-shadow: 4px 4px 15px ${colors.blue_6};
        color: ${colors.white_1};  
        margin: 1rem auto;
    }

    .negocio_list{
        position: relative;
        margin: auto;        
        width: 75%;
        display: flex;      
    }

    ${below.lg`

        .negocio{
            font-size: 2rem;
        }

        .negocio_list{
            width: 95%;
        }
    `};

    ${below.md`
        margin-top: 2.5rem;

        .negocio{
        font-size: 1.5rem;
        }

    `};

    ${below.xsm`
    
        .negocio{
            font-size: 1.2rem;
        }

    `};

`

export default Negocio; 
