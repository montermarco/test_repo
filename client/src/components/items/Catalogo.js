import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {salesList} from '../../actions/itemActions';
import ItemListCard from '../../layout/ItemListCard';
import {ItemListContainer} from '../../elements/Container';
import Loader from '../../elements/Loader';

const Catalogo = ({match}) => {

    const catalogoList = useSelector( state => state.saleItems);
    const {saleItems, loading, error} = catalogoList;
    const dispatch = useDispatch();

    useEffect( () => {
       dispatch(salesList(match.params.category)); 
    },[dispatch, match.params.category]);

    return loading ? <Loader/> :
    error ? <div>{error}</div> :
    
    <ItemListContainer type={'venta'}>    
    <h3>Venta de {match.params.category}s</h3>
    {saleItems && saleItems.map( (item,idx) =>              
        <ItemListCard                     
            key={idx}
            id={item.id}
            nombre={item.nombre}
            tamaño={item.tamaño}
            precio={new Intl.NumberFormat().format(item.precioVenta)}
            paquete={item.paquete}
            fotoCover={item.fotoCover}
            idx={item.indice}
            linkTo={'venta'}
        />
    )}            
  </ItemListContainer>  
};

export default Catalogo;
