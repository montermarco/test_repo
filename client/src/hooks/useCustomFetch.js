import { useState, useEffect } from 'react';
import service from '../config/axios_service';

function useCustomFetch(url){

    const [result, setResult] = useState({});
    const [paquete, setPaquete] = useState([]);
    const [paquetes, setPaquetes] = useState([]);
    const [results, setResults] = useState([]);
    const [err, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function customFetch(url){
        try {
            let response = await service.get(url);
            setResults(response.data.data.items);
            setResult(response.data.data.item);   

            //console.log(response.data.data);

            setPaquetes(response.data.data.paquetes); 
            setPaquete(response.data.data.paquete);        
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }
    
    useEffect( () => {
        setLoading(true);
        customFetch(url);
    },[url]);

    return [results, result, err, loading, paquetes, paquete];
};

export default useCustomFetch;