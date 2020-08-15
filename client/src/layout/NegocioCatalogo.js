import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors, setFlex, below } from '../utilities';
import { DownloadButton } from '../elements/Button';
import Download from '../elements/svg/Download';


const NegocioCatalogoBase = ({className}) => {
    return (
        <div className={className}>
            <div className="catalog">
                <div className="text">
                    <p className="txt_catalog">Da click en el botón para descargar nuestro catálogo.</p>
                </div>
                <NavLink 
                    className="nav_link" 
                    exact to={`/descargarcatalogo`}>     
                    <DownloadButton className="catalog-button">
                        <Download className="icon" size={45}/>
                    </DownloadButton>
                </NavLink>
            </div>
        </div>
    );
};

const NegocioCatalogo = styled(NegocioCatalogoBase)`
    width: 100%;
    ${setFlex()};
    margin: auto;

    .catalog{
        width: 95%;
        margin: 3rem auto;
    }  
    
    .text{
        margin: auto;
        ${setFlex()};
    }  
    
    .txt_catalog{
        color: ${colors.white_1};
        font-size: 1.5rem;
        line-height: 2.5rem;
        padding-bottom: 0.7rem;
    }

    .catalog-button{
        ${setFlex()};
        margin: auto;
    }
  
    ${below.md`

        .txt_catalog{
            text-align: center;
            font-size: 1rem;
        }

    `};

    ${below.sm`

        .catalog-button{
            transform: scale(.7);
        }


    `};

`

export default NegocioCatalogo;