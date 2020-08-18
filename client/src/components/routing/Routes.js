import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Renta from '../sections/Renta';
import Venta  from '../sections/Venta';
import VentaCards from '../../layout/VentaCards';
import Paquete  from '../sections/Paquete';
//import PaqDetail from '../items/PaqDetail';
import Condiciones  from '../sections/Condiciones';
import Nosotros  from '../sections/Nosotros';
import Negocio  from '../sections/Negocio';
import Preguntas  from '../sections/Preguntas';
import {SectionsContainer} from '../../elements/Container';
//<Route path='/paquetes/:id' component={PaqDetail} />

const Routes = () => {  
  return (
    <SectionsContainer>
      <Switch>
        <Route path='/productos' component={Renta} />
        <Route path='/paquetes' component={Paquete} />        
        <Route path='/ventajas' component={VentaCards}/>
        <Route path='/venta' component={Venta}/>
        <Route path='/condiciones' component={Condiciones} />
        <Route path='/negocio' component={Negocio} />
        <Route path='/nosotros' component={Nosotros} />
        <Route path='/preguntas' component={Preguntas} />
      </Switch>
    </SectionsContainer>
  );
}

export default Routes;
