import { css } from 'styled-components';

const size = {

    xlg: 1560,
    lg: 1280,
    md: 768,
    sm: 615,
    xsm: 360
  };
  
export const above = Object.keys(size).reduce( (acc, label) => {
    acc[label] = (...args) => css`
        @media ( min-width: ${size[label]}px ) {
            ${ css(...args)}
        }
    `;
    return acc;
},{});

export const below = Object.keys(size).reduce( (acc, label) => {
    acc[label] = (...args) => css`
    @media ( max-width: ${size[label]}px ) {
        ${css(...args)}
    }
    `;
    return acc;
},{});







