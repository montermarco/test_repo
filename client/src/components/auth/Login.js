import React, {useState} from 'react';
import styled from 'styled-components';
import {AuthContainer} from '../../elements/Container';
import {AuthButton} from '../../elements/Button';
import {demotion, colors} from '../../utilities';

const LoginBase = ({className}) => {

  const [formData, setFormData] = useState({    
    email: '',
    password: ''    
  });

  const { email, password} = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
  
  const onSubmit = async e => {
    e.preventDefault();
    console.log('Success!');    
  }

  return (
    <AuthContainer>
       <div className="logo"></div>
      <form className={className} onSubmit={ e => onSubmit(e) }>
          <h3>Ingreso</h3>
          <label htmlFor="" className="label">Email</label>
          <input 
            className="input" 
            type="email" 
            name="email" 
            value={email}
            onChange={ e => onChange(e)}
            placeholder="Ingresa tu correo"/>
          
          <label htmlFor="" className="label">Contraseña</label>
          <input 
            className="input" 
            type="password" 
            name="password"
            value={password}
            onChange={ e => onChange(e)} 
            placeholder="* * * * * * * *"/>
                    
          <AuthButton>Ingresar</AuthButton>
      </form>
    </AuthContainer>
  );
}

const Login = styled(LoginBase)`
  width: 90%;  
  height: auto;  
  ${demotion[3]};
  border-radius: 1.5rem;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 1rem;
  padding: 2rem 0;

  h3{
    color: ${colors.white_1};    
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: .5rem;
    margin: 0 auto;
    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1);
  }
  
  label{
    color: ${colors.white_1};    
    font-size: .8rem;
    font-weight: 500;
    margin: .7rem;
    margin-left: 1.5rem;
  }
  
  input{
    width: 90%;
    height: 2.5rem;
    border: none;
    ${demotion[1]};
    background-color: transparent;
    border-radius: .5rem;
    margin: 0 auto;
    padding-left: 1rem;

    ::placeholder{        
      color: ${colors.txt_2};
      opacity: .7;      
    }   

    &:focus{
      ${demotion[3]};
      background-color: transparent;
      border: none;
      outline: none;
      color: ${colors.white_3};
    }
  }
`;

export default Login;
