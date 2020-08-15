import React from 'react';
import styled from 'styled-components';
import { colors, below, setFlex } from '../utilities';
import Anticipo from '../elements/svg/Anticipo';
import Cash from '../elements/svg/Cash';
import Credit from '../elements/svg/Credit';
import Reject from '../elements/svg/Reject';


const CondicionesPagoBase = ({className}) => {
    return (
        <div className={className}>
            <div className="payment_conditions">
                <Anticipo className="payment_icon" size={55}/>
                <div className="list">
                    <li className="txt_payment">Se solicitará anticipo del 50% en servicios con monto total a pagar mayor a $1,000.</li>
                    <li className="txt_payment">Se solicitará anticipo del 50% cuando por las características del evento así se requiera.</li>
                </div>
            </div>
            <div className="payment_conditions">
                <Cash className="payment_icon" size={55}/>
                <div className="list">
                    <li className="txt_payment">Puede pagar en efectivo o por transferencia electrónica al momento de la instalción.</li>
                    <li className="txt_payment">Aceptamos pagos con tarjeta de crédito incluyendo American Express o vía PayPal.</li>
                    <li className="txt_payment">Es indispensable liquidar el servicio al momento de la instalción. No aceptamos cheques.</li>

                </div>
            </div>
            <div className="payment_conditions">
                <Credit className="payment_icon" size={55}/>
                <div className="list">
                    <li className="txt_payment">Debe indicar su forma de pago al momento de la contratación o a más tardar un día antes de su evento.</li>
                </div>
            </div>
            <div className="payment_conditions">
                <Reject className="payment_icon" size={55}/>
                <div className="list">
                    <li className="txt_payment">Si al realizar el cargo a su tarjeta el banco lo rechaza el pago deberá hacerse en efectivo.</li>
                    <li className="txt_payment">Es indispensable contar con buena recepción de señal celular para poder realizar el pago con tarjeta.</li>
                </div>
            </div>


        </div>
    );
};

const CondicionesPago = styled(CondicionesPagoBase)`
    width: 100%;
    ${setFlex()};
    margin: auto;
    flex-flow: row wrap;
    
    .payment_icon{
        display: inline-block;    
        padding: 0.5rem 0.5rem;
        margin: auto 3.5rem; 
    }

    .list{
        display: inline-block;
        margin-left: 2.5rem;
        list-style-type: none;
    }
        
    .payment_conditions{
        width: 100%;
        margin: 1.5rem 0 0.5rem 2.5rem;
    }
    
    .txt_payment{
        color: ${colors.white_1};
        font-size: 1rem;
        margin: 0 0 0 4rem;
        line-height: 1.1rem;
        padding-bottom: 0.7rem;
    }

    ${below.xlg`

        .txt_payment{
            margin: 0 0;
            font-size: 0.9rem;
        }

    `};

    ${below.lg`

        .payment_conditions{
            text-align: center;
            margin-left: 1.5rem;
        }

        .list{
            margin-top: 1.5rem;
        }

    `};

    ${below.md`

        .payment_conditions{
            margin-top: 1rem;
        }

        .list{
            margin-left: 0rem;
        }

    `};

    ${below.sm`

        .payment_conditions{
            margin-left: 0.5rem;
        }

        .txt_payment{
            font-size: 1rem;
        }


    `};

`



export default CondicionesPago;