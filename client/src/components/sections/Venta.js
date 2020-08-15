import React from 'react';
import { Route } from 'react-router-dom';
import {RentContainer} from '../../elements/Container';
import Menu from '../../layout/CategoryMenu';
import Catalogo from '../items/Catalogo';
import CatalogoItemDetail from '../items/CatalogoItemDetail';

const Venta = ({className}) => {
    return (
        <>        
        <RentContainer className={className}>
          <Menu type='venta'/>
          <div className="item_list"> 
            <Route exact path={`/venta/catalogo/:category`} component={Catalogo}/>
            <Route exact path={`/venta/catalogo/:category/:id`} component={CatalogoItemDetail}/>
           </div>            
        </RentContainer> 
        </>
    );
};

export default Venta;
