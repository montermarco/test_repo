import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import {Wrapper} from './elements/Container';
import Home from './components/sections/Home';
import Renta  from './components/sections/Renta';
import Venta  from './components/sections/Venta';
import VentaCards from './layout/VentaCards';
import Paquete  from './components/sections/Paquete';
import Condiciones  from './components/sections/Condiciones';
import Nosotros  from './components/sections/Nosotros';
import Negocio  from './components/sections/Negocio';
import Preguntas  from './components/sections/Preguntas';
import Footer from './layout/Footer';
import TopBar from './layout/TopBar';
import NavBar from './layout/Navbar';

function App() {
  return (  
    <Wrapper>           
        
        <TopBar/>
        <NavBar/>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/productos' component={Renta} />
          <Route path='/venta/catalogo' component={Venta} />
          <Route path='/paquetes' component={Paquete} />
          <Route path='/condiciones' component={Condiciones} />
          <Route path='/nosotros' component={Nosotros} />
          <Route path='/negocio' component={Negocio} />
          <Route path='/preguntas' component={Preguntas} />
          <Route exact path='/venta' component={VentaCards}/>                        
        </Switch>
        <Footer/>
      
      <GlobalStyle/>
    </Wrapper>
  );
}

export default App;


