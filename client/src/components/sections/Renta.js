import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import {RentContainer} from '../../elements/Container';
import Menu from '../../layout/CategoryMenu';
import ItemList from '../items/ItemList';
import ItemDetail from '../items/ItemDetail';

const Renta = ({className}) => {
    
    let { path } = useRouteMatch();
    
    return (        
        <RentContainer className={className}>
          <Menu/>            
          <div className="item_list"> 
            <Switch> 
              <Route exact path={`${path}/:category`} component={ItemList}/>
              <Route exact path={`${path}/:category/:id`} component={ItemDetail}/>
            </Switch>
          </div>
        </RentContainer>         
    );
};

export default Renta;
