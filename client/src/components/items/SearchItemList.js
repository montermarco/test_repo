import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import useCustomFetch from '../../hooks/useCustomFetch';
// import ItemList from '../items/ItemList';
import ItemListCard from '../../layout/ItemListCard';
import {ItemListContainer} from '../../elements/Container';
import {handleSearch} from '../../layout/SearchBar';
import {setFlex, fixed, colors, elevation} from '../utilities';
import { SearchIcon } from '../elements/Icons';


function SearchItemList( {className}, {match} ) {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");
    const [url, setUrl] = useState(null);
    const [results, err, loading] = useCustomFetch(search);

    useEffect( () => {
        setSearch(`/items/${<handleSearch/>}`)
    }, []);

    useEffect( () => {
        setItems(results)
    }, [results]);

    return (
        <>          
          <ItemListContainer>            
            {items.map( (item,idx) =>              
                <ItemListCard                     
                    key={idx}
                    id={item.id}
                    nombre={item.nombre}
                    tamaño={item.tamaño}
                    precio={item.precio}                    
                    paquete={item.paquete}                    
                />
            )}            
          </ItemListContainer>
        </>
    );

}


export default SearchItemList;
