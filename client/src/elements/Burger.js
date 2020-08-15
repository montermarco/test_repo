import React, { useState } from 'react';
import styled from 'styled-components';
import NavbarList from './NavbarList';
import {fixed, below } from '../utilities/';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  ${fixed({x:"1rem", y:"3.5rem"})}  
  z-index: 20;
  display: none;

  div{    
    &:nth-child(2) {
      width: 70%;
    }    
  }
  
  ${below.md`
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    overflow: auto;
  `};
  
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#fff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavbarList 
        open={open} 
        onClick={() => setOpen(!open)}/>
    </>
  )
}
export default Burger;