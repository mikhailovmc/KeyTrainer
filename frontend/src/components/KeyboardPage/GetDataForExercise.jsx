import KeyboardPage from "./KeyboardPage";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch/useFetch";
import { getExercisesById } from "../../helpers/links";

const GetDataForExercise = () => {
    const {id} = useParams();

    const {data, isLoading, error} = useFetch(getExercisesById + "/" + id);
    return  (
        <>
            {data && <KeyboardPage data={data} id={id}/>}
        </>
    )
}
 
export default GetDataForExercise;