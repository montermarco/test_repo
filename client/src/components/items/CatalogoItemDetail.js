import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {salesItemDetail} from '../../actions/itemActions.js';
import {ItemDetailContainer} from '../../elements/Container';
import ItemDetailCard from '../../layout/ItemDetailCard';
import Loader from '../../elements/Loader';

function CatalogoItemDetail() {
    
    const itemDetail = useSelector(state => state.saleItem);
    const dispatch = useDispatch();
    const {saleItem, loading} = itemDetail;

    let history = useHistory();
    let { category, id } = useParams();

    useEffect( () => {
        dispatch(salesItemDetail(category,id))
    }, [dispatch, category, id]);
        
    const back = () => history.goBack();

    return (
        <ItemDetailContainer>
            {loading && <Loader/>}                        
            { saleItem && <ItemDetailCard
                nombre={saleItem.nombre}
                precio={ new Intl.NumberFormat().format(saleItem.precioVenta)}
                desc={saleItem.descripcion}
                observaciones={saleItem.observaciones}                
                medidas={saleItem.medidas}
                fotoCover={saleItem.fotoCover}
                fotos={saleItem.fotos}
                stock={saleItem.stock}
                indice={saleItem.indice}
                back={back}
                type='venta'              
            />}            
        </ItemDetailContainer>
    )
}

export default CatalogoItemDetail;





//CatalogoItemDetail