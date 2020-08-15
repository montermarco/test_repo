import React from 'react';
import { Route } from 'react-router-dom';
import {RentContainer} from '../../elements/Container';
import Menu from '../../layout/CategoryMenu';
import ItemList from '../items/ItemList';
import ItemDetail from '../items/ItemDetail';

const Renta = ({className}) => {
    return (
        <>
        <RentContainer className={className}>
            <Menu/>            
            <div className="item_list">            
              <Route exact path={`/productos/:category`} component={ItemList}/>
              <Route exact path={`/productos/:category/:id`} component={ItemDetail}/>
            </div>
        </RentContainer> 
        </>
    );
};

export default Renta;
