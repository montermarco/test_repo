import React from 'react';
import styled from 'styled-components';
import {setFlex, colors, below} from '../../utilities';
import Many from '../../elements/svg/Many';
import Event from '../../elements/svg/Event';
import PriceEvent from '../../elements/svg/PriceEvent';
import {SectionsContainer} from '../../elements/Container';


const NosotrosBase = ({className}) => {
    return (
        <SectionsContainer className={className}>
            <div className="texto_principal">
                <h2 className="nosotros">Acerca de Noryan</h2>
                <p className="txt_nosotros">Somos especialistas en Juegos Inflables desde el 2003. Ofrecemos juegos novedosos, limpios, en excelentes condiciones, diseñados para la diversión y seguridad de los niños. La atención que ofrecemos es amable, respetuosa, puntual y preocupada por satisfacer sus necesidades.</p>
                <p className="txt_dos_nosotros">Tambien ofrecemos Rockolas, Maquinitas, Futbolitos, Jumpings y Little Tikes. Nuestros precios son por evento diario (no por un número determinado de horas) y contamos con diferentes formas de pago (efectivo, transferencia, tarjeta de débito y crédito, paypal, etc).</p>
            </div>
            <div className="info_adicional">
                <div className="modelos_dif">
                    <Many className="icon" size={50}/>
                    <h3 className="title">70 Modelos Diferentes</h3>
                    <p className="txt_info_adicional">Originales y unicos en México garantizan que tenemos el juego perfecto para tu evento.</p>
                </div>
                <div className="eventos">
                    <Event className="icon" size={50}/>
                    <h3 className="title">58,000 eventos</h3>
                    <p className="txt_info_adicional">Durante más de 17 años con una gran tasa de satisfacción nos respaldan.</p>
                </div>
                <div className="precio">
                    <PriceEvent className="icon" size={50}/>
                    <h3 className="title">Precio por evento</h3>
                    <p className="txt_info_adicional">Nuestros precios son por el tiempo que dure su evento y no por un número determinado de horas.</p>
                </div>
            </div>
        </SectionsContainer>
    );
};

const Nosotros = styled(NosotrosBase)`
    width: 100%;
    

    .texto_principal{
        position: relative;
        color: ${colors.white_1};  
    }

    .nosotros{
        font-size: 3rem;
        text-align:center;
        font-weight: 700;
        letter-spacing: .4rem;
        text-shadow: 4px 4px 15px ${colors.blue_6};
        ${setFlex({ x:"space-around" })};
    }

    .txt_nosotros{
        ${setFlex({ x:"space-around" })};
        font-size: 1.1rem;
        letter-spacing: .1rem;
        text-align:center;
        line-height: 1.6rem;
        margin: auto 4rem;
    }

    .txt_dos_nosotros{
        ${setFlex({ x:"space-around" })};
        font-size: 1.1rem;
        letter-spacing: .1rem;
        text-align:center;
        line-height: 1.6rem;
        margin: 1rem 4rem 0rem 4rem;
    }

    .info_adicional{
        margin: 5rem 0rem 0rem 1rem;
    }

    .icon{
        display: block;
        margin: 0 auto;
    }

    .title{
        color: ${colors.white_1};
        font-size: 1.2rem;
        letter-spacing: .1rem;
        font-weight: 500;
    }

    .txt_info_adicional{
        color: ${colors.white_1};
        font-size: .9rem;
        letter-spacing: .1rem;
        margin: auto 6rem;
        line-height: 1.4rem;
    }

    .modelos_dif{
        width: 33%;
        display: inline-block;
        text-align: center;
    }

    .eventos{
        width: 32%;
        display: inline-block;
        text-align: center;
    }

    .precio{
        width: 33%;
        display: inline-block;
        text-align: center;
    }

    ${below.xlg`
        .info_adicional{
            margin: 4rem 0rem 0rem 0rem;
        }
    `};

    ${below.lg`
        .nosotros{
            font-size: 2rem;
        };
        
        .txt_nosotros{
            font-size: 1rem;
        }
        
        .txt_dos_nosotros{
            font-size: 1rem;
        }
        
        .info_adicional{
            display: flex;
        }

        .txt_info_adicional{
            letter-spacing: 0rem;
            margin: auto 5rem;
            line-height: 1.1rem;
        }

    `};

    ${below.md`
        margin-top: 2.5rem;

        .nosotros{
            font-size: 1.5rem;
        };

        .txt_nosotros{
            line-height: 1.2rem;
            margin: auto 1rem;

        }
        
        .txt_dos_nosotros{
            line-height: 1.2rem;
            margin: 1rem 1rem 0rem 1rem;
        }

        .info_adicional{
            margin: 0rem 0rem;
            transform: scale(.9);
            display: flex;
            flex-direction: column;
        }

        .modelos_dif{
            width: 100%;
            margin-bottom: 1rem;
        }

        .eventos{
            width: 100%;
            margin: 1rem auto;

        }

        .precio{
            width: 100%;
            margin: 1rem auto;
        }

        .txt_info_adicional{
            letter-spacing: 0rem;
            margin: auto 4rem;
            line-height: 1rem;
        }

    `};

    ${below.xsm`
        
        .nosotros{
            font-size: 1.2rem;
        }

        .info_adicional{
            margin: -2rem 0rem 0rem 0rem;
            display: flex;
            flex-direction: column;
        }

        .txt_info_adicional{
            letter-spacing: 0rem;
            margin: auto 4rem;
            line-height: 1rem;
        }

    `};
`;


export default Nosotros;