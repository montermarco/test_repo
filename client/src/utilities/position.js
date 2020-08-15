import { css } from 'styled-components';

export const fixed = ({ 
    x = 0, 
    y = 0, 
    yP = 'top', 
    xP='left' 
} = {}) => css`
    position: fixed;
    ${yP} : ${y};
    ${xP} : ${x};
`;

export const absolute = ({ 
    x = 0, 
    y = 0, 
    yP = 'top', 
    xP='left' 
} = {}) => css`
    position: absolute;
    ${yP} : ${y};
    ${xP} : ${x};
`;

export const setFlex = ( {x = 'center', y='center' } = {} ) => {
    return `display:flex;align-items:${y};justify-content:${x}`;
};