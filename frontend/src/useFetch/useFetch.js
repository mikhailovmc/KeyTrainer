import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(url).then((res) => {
            if(!res.ok) {
                throw Error('Could not fetch the data for that resource');
            }
            return res.json()
        }).then(data => {
            setData(data);
            setLoading(false);
            setError(null);
        }).catch(error => {
            setLoading(false);
            setError(error.message);
        })
    }, [])

    return {data, isLoading, error}
}
 
export default useFetch;