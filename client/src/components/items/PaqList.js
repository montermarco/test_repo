import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {listPackage} from '../../actions/itemActions';
import PaqListCard from '../../layout/PaqListCard';
import {PaqListContainer} from '../../elements/Container';

const PaqList = () => {
    
    const packageList = useSelector( state => state.packages );
    const { packages, loading } = packageList;
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(listPackage());
    },[dispatch]);

    return (
        <>
        {loading && <div>Loagding ...</div>}     
          <PaqListContainer>
            {packages && packages.map( (paquete,idx) =>              
                <PaqListCard                     
                    key={idx}
                    id={paquete.id}
                    nombre={paquete.nombre}
                    tamaño={paquete.tamaño}
                    precio={paquete.precio}                    
                    paquete={paquete.paquete}
                    fotoCover={paquete.fotoCover}
                    // category={match.params.category} 
                />
            )}            
          </PaqListContainer>
        </>
    );
};

export default PaqList;


/*
//import useCustomFetch from '../../hooks/useCustomFetch';
    const [paquetesResponse, setPaquetesResponse] = useState([]);
    const [url, setUrl] = useState(null);
    const [results, result, err, loading, paquetes] = useCustomFetch(url);

    useEffect( () => {
        setUrl(`/paquetes/`)
    }, [url]);

    useEffect( () => {
        setPaquetesResponse(paquetes)
    }, [paquetes]);
    */