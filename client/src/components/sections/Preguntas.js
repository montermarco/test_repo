import React from 'react';
import styled from 'styled-components';
import { colors, below} from '../../utilities';
import {SectionsContainer} from '../../elements/Container';


const PreguntasBase = ({className}) => {
    return (
        <SectionsContainer className={className}>
            <div className="title">
                <h2 className="preguntas">Preguntas Frecuentes</h2>
            </div>
            <div className="questions_list">
                <div className="question_answer">
                    <p className="question">1.- ¿Qué medidas de prevención se están tomando para evitar contagios por COVID-19?</p>
                    <p className="answer">R.- Todos nuestros juegos se lavan cada que regresan de un evento en un área especialmente asignada. 
                    Utilizamos jabón (sin cloro) y posteriormente los rociamos con desinfectante. Los juegos permanecen almacenados en un área de 
                    acceso restringido para evitar que se contaminen. Nuestro personal acude a su domicilio con guantes y cubrebocas y tratamos de 
                    mantener en todo momento la sana distancia.</p>
                </div>
                <div className="question_answer">
                    <p className="question">2.- ¿Qué zonas abarcan para servicios en renta?</p>
                    <p className="answer">R.- Damos servicio a toda la CDMX, Estado de México y Cuernavaca aunque en algunos casos se puede generar 
                    un cargo adicional de envío.</p>
                </div>
                <div className="question_answer">
                    <p className="question">3.- ¿Qué requisitos debo cumplir para poder solicitar un servicio?</p>
                    <p className="answer">R.- En la sección de Condiciones podrá encontrar todos los puntos relevantes que debe considerar para 
                    solicitar un servicio con nosotros.</p>
                </div>
                <div className="question_answer">
                    <p className="question">4.- ¿Puedo obtener un descuento en la renta de varios juegos?</p>
                    <p className="answer">R.- Manejamos algunos paquetes que puede encontrar en dicha sección donde efectivamente hacemos algunos 
                    descuentos. En casos extraordinarios donde nos solicitan varios juegos (más de 5) o bien juegos por varios días también podemos 
                    considerar hacer alguna mejora en el precio</p>
                </div>
                <div className="question_answer">
                    <p className="question">5.- ¿Por qué debo pagar un anticipo?</p>
                    <p className="answer">R.- El pago de anticipo nos asegura a ambas partes que el evento es un hecho y que debemos cumplir nuestra 
                    parte, además de ayudarnos a evitar traer demasiado efectivo por cuestiones de seguridad.</p>
                </div>
                <div className="question_answer">
                    <p className="question">6.- ¿Por qué me piden mis documentos para hacer la contratación?</p>
                    <p className="answer">R.- Entendemos que es incómodo ya que la inseguridad en nuestro país es grave, pero es precisamente por 
                    dicha inseguridad que debemos confirmar la identidad del contratante, ya que desafortunadamente hemos tenido algunas malas 
                    experiencias y debemos garantizar que los juegos son contratados por personas reales y con buenas intenciones. Todos sus datos 
                    son manejados de acuerdo a nuestro aviso de privacidad en donde expresamente aclaramos que no se comparten con nadie ajeno a la 
                    empresa y es meramente para fines de garantizar la seguridad de nuestros equipos y personal.</p>
                </div>
                <div className="question_answer">
                    <p className="question">7.- ¿Para qué edades es recomendable cada juego?</p>
                    <p className="answer">R.- Nuestros juegos están diseñados para que los puedan utilizar niños de cualquier edad, todos nuestros 
                    juegos son seguros pero siempre deben utilizarse bajo la supervisión de un adulto.</p>
                </div>
                <div className="question_answer">
                    <p className="question">8.- ¿Cuántos niños pueden subirse a cada juego?</p>
                    <p className="answer">R.- La capacidad de los juegos es muy relativa ya que depende de las edades de los niños, sin embargo, todos 
                    nuestros juegos estan diseñados para que en el momento de revasar su capacidad máxima pierdán presión suficiente para hacerlo 
                    notorio sin que represente un riesgo para los niños que estén utilizándolo.</p>
                </div>
            </div>
        </SectionsContainer>
    );
};

const Preguntas = styled(PreguntasBase)`
    width: 100%;


    .title{
        font-size: 2rem;
        text-align:center;
        font-weight: 700;
        letter-spacing: .4rem;
        text-shadow: 4px 4px 15px ${colors.blue_6};
        color: ${colors.white_1};  
        margin-top: 0.5rem;
    }

    .preguntas{
        margin-top: 0;
        margin-bottom: 2.5rem;
    }

    .questions_list{
        color: ${colors.white_1};
        font-size: 1rem;
        margin: 0 4rem;
    }

    .question_answer{
        margin-bottom: 2.5rem;
    }

    .question{
        font-weight: bold;
    }

    .answer{
        text-align: justify;
    }

    ${below.lg`

        .title{
            font-size: 1.5rem;
        }

    `};

    ${below.md`
        
        margin-top: 2.5rem;

        .title{
            font-size: 1rem;
        }

        .questions_list{
            margin: 0 1rem;
        }

    `};

`

export default Preguntas;