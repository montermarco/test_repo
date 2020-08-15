import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ItemListCard from '../../layout/ItemListCard';
import {ItemListContainer} from '../../elements/Container';
import {listItems} from '../../actions/itemActions';
import SearchBar from '../../layout/SearchBar';
import Loader from '../../elements/Loader';

const ItemList = ({match }) => {
    
    const [searchKeyword, setSearchKeyword] = useState('');
    const [size, setSize] = useState('');
    const [price, setPrice] = useState('');

    const itemList = useSelector( state => state.items );
    const {items,loading, error} = itemList;
    const dispatch = useDispatch();
    let result;

    useEffect( () => {

        dispatch(listItems(match.params.category, null, null, null))
    },[dispatch, match.params.category]);

 
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
      dispatch(listItems(match.params.category, size, null , price));
    }

    const priceHandler = (e) => {
      const price = e.target.value;
      setPrice(e.target.value);
      console.log(price)
      if (size === ''){
        if(price === "-precio" || price === "precio"){
            dispatch(listItems(match.params.category, null, null , price));
        } else if(price === "precio[lte]=1500" || "precio[lte]=3000" || "precio[lte]=4500"){
            dispatch(listItems(match.params.category, null, price , null));
        }
      } else if (size !== '') {
        if(price === "-precio" || price === "precio"){
            dispatch(listItems(match.params.category, size, null , price));
        } else if(price === "precio[lte]=1500" || "precio[lte]=3000" || "precio[lte]=4500"){
            dispatch(listItems(match.params.category, size, price , null));
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
        <h3>{match.params.category}</h3>
        {result && result.map( (item,idx) =>              
            <ItemListCard                     
                key={idx}
                id={item.id}
                nombre={item.nombre}
                tamaño={item.tamaño}
                precio={ new Intl.NumberFormat().format(item.precio)}
                paquete={item.paquete}
                category={match.params.category}
                fotoCover={item.fotoCover}
                idx={item.indice}
                linkTo={'renta'}
            />
        )}            
      </ItemListContainer>
    </>

};

export default ItemList;

/*
 const setUrl = {    
    all: `/items/${category}`,
    size: `/items/${category}?tamaño=${size}`,
    price: `/items/${category}?${price_cond}`,
    sort: `/items/${category}?sort=${sortBy}`,    
    sizeAndPrice: `/items/${category}?tamaño=${size}&${price_cond}`,
    sizeAndSort: `/items/${category}?tamaño=${size}&sort=${sortBy}`,
    allConditions: `/items/${category}?tamaño=${size}&${price_cond}&sort=${sortBy}`,
  }

*/
