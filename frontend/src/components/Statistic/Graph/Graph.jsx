
import { getGraphic } from '../../../helpers/links';
import AuthContext from '../../../context/AuthProvider';
import { useContext } from 'react';
import useFetch from '../../../useFetch/useFetch';
import ShowGraph from './ShowGraph';


const Graph = () => {
    const {auth} = useContext(AuthContext);
    
    const {data:lineGraph, isLoading, error} = useFetch(getGraphic + auth.id);

    return (
        <>
            {lineGraph && <ShowGraph x={lineGraph.x} y={lineGraph.y}/>}
        </>
    )
}
 
export default Graph;