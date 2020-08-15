import { createGlobalStyle } from 'styled-components';
import { colors } from './utilities';

const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
    }

 *,*:before, *:after {
        box-sizing: inherit;
    }


    body {        
        font-family: "Montserrat", sans-serif;
        background-image: linear-gradient(${colors.blue_1}, ${colors.blue_5} );
        background-size: cover;
        background-repeat: no-repeat;
        font-size: 62.5%;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 0;
        margin: 0;
    }

    ::-webkit-scrollbar {
      width: .5rem;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }
    

    ::-webkit-scrollbar-thumb { 
      background-color: #457ABF;
      border-radius: 15px;
    }

`;

export default GlobalStyle;