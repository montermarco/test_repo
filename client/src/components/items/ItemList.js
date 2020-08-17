import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemListCard from '../../layout/ItemListCard';
import {ItemListContainer} from '../../elements/Container';
import {listItems} from '../../actions/itemActions';
import SearchBar from '../../layout/SearchBar';
import Loader from '../../elements/Loader';

const ItemList = () => {
    
    const [searchKeyword, setSearchKeyword] = useState('');
    const [size, setSize] = useState('');
    const [price, setPrice] = useState('');

    const itemList = useSelector( state => state.items );
    const {items,loading, error} = itemList;
    const dispatch = useDispatch();
    let result;

    let { category } = useParams();

    useEffect( () => {

        dispatch(listItems(category, null, null, null))
    },[dispatch, category]);

 
    const searchHandler = (e) => {                
        const search = e.target.value;    
        search.length > 1 ? setSearchKeyword(search) : setSearchKeyword('');        
    }
    
    if(searchKeyword !== ''){      
      result = items && items.filter(item =>(
        item.descripcion.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1))            
    } else {
      result = items;
    }

    const sizeHandler = (e) => {      
      const size = e.target.value;
      setSize(e.target.value);
      dispatch(listItems(category, size, null , price));
    }

    const priceHandler = (e) => {
      const price = e.target.value;
      setPrice(e.target.value);      
      if (size === ''){
        if(price === "-precio" || price === "precio"){
            dispatch(listItems(category, null, null , price));
        } else if(price === "precio[lte]=1500" || "precio[lte]=3000" || "precio[lte]=4500"){
            dispatch(listItems(category, null, price , null));
        }
      } else if (size !== '') {
        if(price === "-precio" || price === "precio"){
            dispatch(listItems(category, size, null , price));
        } else if(price === "precio[lte]=1500" || "precio[lte]=3000" || "precio[lte]=4500"){
            dispatch(listItems(category, size, price , null));
        }
      }
    }
    
    return loading ? <Loader/> :
      error ? <div>{error}</div> :
      <>
      <SearchBar            
        searchHandler={searchHandler}            
        sizeHandler={sizeHandler}
        priceHandler={priceHandler}
        />
      <ItemListContainer>
        <h3>{category}</h3>
        {result && result.map( (item,idx) =>              
            <ItemListCard                     
                key={idx}
                id={item.id}
                nombre={item.nombre}
                tamaño={item.tamaño}
                precio={ new Intl.NumberFormat().format(item.precio)}
                paquete={item.paquete}
                category={category}
                fotoCover={item.fotoCover}
                idx={item.indice}
                linkTo={'renta'}
            />
        )}            
      </ItemListContainer>
    </>

};

export default ItemList;

