import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
//import useCustomFetch from '../../hooks/useCustomFetch';
import {detailPackage} from '../../actions/itemActions';
import {PaqDetailContainer} from '../../elements/Container';
import ItemDetailCard from '../../layout/ItemDetailCard';

function PaqDetail({match}) {

    const packageDetail = useSelector(state => state.packageNoryan);
    const {packageNoryan, loading } = packageDetail;
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(detailPackage(match.params.id))
    }, [dispatch, match.params.id]);
    
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

/*
    const [paquetesResponse, setPaquetesResponse] = useState([]);
    const [url, setUrl] = useState(null);
    const [results, result, err, loading, paquetes, paquete] = useCustomFetch(url);

    useEffect( () => {
        setUrl(`/paquetes/${match.params.id}`)
    }, [url, match.params.id]);

    useEffect( () => {
        setPaquetesResponse(paquete)
    }, [paquete]);
    */