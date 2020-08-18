import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import {RentContainer} from '../../elements/Container';
import Menu from '../../layout/CategoryMenu';
import Catalogo from '../items/Catalogo';
import CatalogoItemDetail from '../items/CatalogoItemDetail';

const Venta = ({className}) => {
    
  let {url} = useRouteMatch();

  return (  
        <RentContainer className={className}>
          <Menu type='venta'/>
          <div className="item_list">
            <Switch>
              <Route exact path={`${url}/catalogo/:category`} component={Catalogo}/>
              <Route exact path={`${url}/catalogo/:category/:id`} component={CatalogoItemDetail}/>
            </Switch>
           </div>            
        </RentContainer> 
    );
};

export default Venta;
