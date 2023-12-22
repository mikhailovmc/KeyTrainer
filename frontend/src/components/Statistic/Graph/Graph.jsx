
import { getGraphic } from '../../../helpers/links';
import AuthContext from '../../../context/AuthProvider';
import { useContext } from 'react';
import useFetch from '../../../useFetch/useFetch';
import ShowGraph from './ShowGraph';


const Graph = ({userId}) => {
    const {auth} = useContext(AuthContext);

    let currentUserId;
    if (userId) currentUserId = userId;
    else currentUserId = auth.id

    const {data:lineGraph, isLoading, error} = useFetch(getGraphic + currentUserId);

    return (
        <>
            {lineGraph && <ShowGraph x={lineGraph.x} y={lineGraph.y}/>}
        </>
    )
}
 
export default Graph;