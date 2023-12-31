import { useParams } from "react-router-dom";
import useFetch from "../../useFetch/useFetch";
import { getLevelForEditing } from "../../helpers/links";
import AdminHeader from "../Headers/AdminHeader";
import ChangeLevelForm from "./ChangeLevelForm";


const ChangeLevel = () => {
    const {id} = useParams();
    const {data:exercise, isLoading, error} = useFetch(getLevelForEditing + id);

    return ( 
        <>
            <AdminHeader/>
            {isLoading ? <div>Загрузка данных</div> : 
                <div className="changeDifficult">
                    {exercise && <ChangeLevelForm exercise={exercise}/>}
                </div>}
            
        </>
    );
}
 
export default ChangeLevel;