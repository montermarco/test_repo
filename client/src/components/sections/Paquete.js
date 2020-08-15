import React from 'react';
import { Route } from 'react-router-dom';
import {PaqContainer} from '../../elements/Container';
import PaqList from '../items/PaqList';
import PaqDetail from '../items/PaqDetail';
import styled from 'styled-components';
import {setFlex, colors, below} from '../../utilities';


const PaqueteBase = ({className}) => {
    return (
        <>
            <div className={className}>
                <div className="title">
                    <h1 className="title_paquetes">¡Arma tú Paquete!</h1>
                    <p className="txt_paquetes">Renta un inflable y complementa la diversion añadiendo cualquiera de los siguientes 
                    productos a un precio increible!...</p>
                </div>
                <PaqContainer>
                    {/* <SearchBar/> */}
                    <div className="paquetes_list">
                        <Route exact path={`/paquetes`} component={PaqList}/>
                        <Route exact path={`/paquetes/:id`} component={PaqDetail}/>
                    </div>
                </PaqContainer>
            </div>
        </>
    );
};

const Paquete = styled(PaqueteBase)`
    width: 100%;
    height: 75vh;    


    .title_paquetes{
        font-size: 3rem;
        text-align:center;
        font-weight: 700;
        ${setFlex()};
        letter-spacing: .4rem;
        color: ${colors.white_1};  
        text-shadow: 4px 4px 15px ${colors.blue_6};
        margin: 0.5rem auto;

    }

    .txt_paquetes{
        font-size: 1.2rem;
        letter-spacing: .1rem;
        text-align:center;
        color: ${colors.white_1};
        margin: 0.5rem 2rem;
    }

    ${below.lg`

        .title_paquetes{
            font-size: 2rem;
        }

    `};

    ${below.md`

        margin-top: 3rem;
        overflow: auto;

        .title_paquetes{
            font-size: 1.5rem;
        }

        .txt_paquetes{
            font-size: 1.1rem;
            letter-spacing: 0;
            margin: 0.5rem 1rem;

        }

    `};

    ${below.sm`

        .txt_paquetes{
            font-size: 1rem;
            margin: 0.5rem 0.5rem 0 0.5rem;

        }


    `};


`

export default Paquete; 


