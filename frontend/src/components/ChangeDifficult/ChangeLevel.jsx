import { useParams } from "react-router-dom";
import useFetch from "../../useFetch/useFetch";
import { getLevelForEditing } from "../../helpers/links";
import AdminHeader from "../Headers/AdminHeader";
import ChangeLevelForm from "./ChangeLevelForm";
import { useState } from "react";

const ChangeLevel = () => {

    const {id} = useParams();

    const {data:exercise, isLoading, error} = useFetch(getLevelForEditing + id);

    const [newExercise, setNewExercise] = useState(null);

    const getNewExercise = (exercise) => {
        setNewExercise(exercise)
    }
    
    console.log(exercise)

    const checkExercise = () => {
        if(newExercise !== null) {
            return <ChangeLevelForm exercise={newExercise} getNewExercise={getNewExercise}/>
        } else {
            return <ChangeLevelForm exercise={exercise} getNewExercise={getNewExercise}/>
        }
    }

    return ( 
        <>
            <AdminHeader/>
            {isLoading ? <div>Загрузка данных</div> : 
                <div className="changeDifficult">
                    {exercise && checkExercise()}
                </div>}
            
        </>
    );
}
 
export default ChangeLevel;