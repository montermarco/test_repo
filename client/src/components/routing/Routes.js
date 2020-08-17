import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Renta from '../sections/Renta';
import Venta  from '../sections/Venta';
import VentaCards from '../../layout/VentaCards';
import Paquete  from '../sections/Paquete';
import Condiciones  from '../sections/Condiciones';
import Nosotros  from '../sections/Nosotros';
import Negocio  from '../sections/Negocio';
import Preguntas  from '../sections/Preguntas';
//import ItemList from '../items/ItemList';
//import ItemDetail from '../items/ItemDetail';
import {SectionsContainer} from '../../elements/Container';

const Routes = () => {
  
  return (
    <SectionsContainer>
      <Switch>
        <Route path='/productos' component={Renta} />
        <Route path='/venta/catalogo' component={Venta} />
        <Route path='/venta' component={VentaCards}/>
        <Route path='/paquetes' component={Paquete} />
        <Route path='/condiciones' component={Condiciones} />        
        <Route path='/negocio' component={Negocio} />
        <Route exact path='/nosotros' component={Nosotros} />
        <Route exact path='/preguntas' component={Preguntas} />        
      </Switch>
    </SectionsContainer>
  );
}

export default Routes;
