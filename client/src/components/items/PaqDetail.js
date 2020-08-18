import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {detailPackage} from '../../actions/itemActions';
import {PaqDetailContainer} from '../../elements/Container';
import ItemDetailCard from '../../layout/ItemDetailCard';

function PaqDetail() {

    const packageDetail = useSelector(state => state.packageNoryan);
    const {packageNoryan, loading } = packageDetail;
    const dispatch = useDispatch();

    let {id} =useParams();

    useEffect( () => {
        dispatch(detailPackage(id))
    }, [dispatch, id]);
    
    return (
        <PaqDetailContainer>
            {loading && <div>LOADING</div>}
            { packageNoryan &&  <ItemDetailCard
                nombre={packageNoryan.nombre}
                precio={packageNoryan.precioPaquete}
                desc={packageNoryan.descripcion}
                observaciones={packageNoryan.observaciones}
                medidas={packageNoryan.medidas}                      
                fotoCover={packageNoryan.fotoCover}
            />  
            }
        </PaqDetailContainer>
    )
}

export default PaqDetail;