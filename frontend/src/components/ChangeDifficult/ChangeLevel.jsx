import { useParams } from "react-router-dom";
import useFetch from "../../useFetch/useFetch";
import { getExercisesById } from "../../helpers/links";

import { useEffect, useState } from "react";
import AdminHeader from "../Headers/AdminHeader";
import ChangeLevelForm from "./ChangeLevelForm";

const ChangeLevel = () => {

    const {id} = useParams();

    const {data:exercise, isLoading, error} = useFetch(getExercisesById + '/' + id);

    
    console.log(exercise)

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