import React, {useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {detailItem} from '../../actions/itemActions.js';
import {ItemDetailContainer} from '../../elements/Container';
import ItemDetailCard from '../../layout/ItemDetailCard';
import Loader from '../../elements/Loader';

function ItemDetail() {
    
    const itemDetail = useSelector(state => state.item);
    const dispatch = useDispatch();
    const {item, loading} = itemDetail;

    let history = useHistory();
    let { category, id } = useParams();

    useEffect( () => {
        dispatch(detailItem(category, id))
    }, [dispatch, category, id]);
    
    const back = () => history.goBack();

    return (
        <ItemDetailContainer>
            {loading && <Loader/>}
            { item && <ItemDetailCard
                nombre={item.nombre}
                precio={ new Intl.NumberFormat().format(item.precio)}
                desc={item.descripcion}
                observaciones={item.observaciones}                
                medidas={item.medidas}
                fotoCover={item.fotoCover}
                fotos={item.fotos}
                stock={item.stock}
                indice={item.indice}
                back={back}
            />}
        </ItemDetailContainer>
    )
}

export default ItemDetail;