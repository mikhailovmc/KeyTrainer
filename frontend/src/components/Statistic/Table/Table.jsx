import CellOfStatistic from "./CellOfStatistic";
import AuthContext from "../../../context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import useFetch from "../../../useFetch/useFetch";
import { getStatisticsByExerciseId, getStatisticsByUserId } from "../../../helpers/links";
import "./../style.scss";

const Table = ({userId, exerciseId}) => {
    const { auth } = useContext(AuthContext);
    
    const [userStatistic, setUserStatistic] = useState();
    const [exerciseStatistic, setExerciseStatistic] = useState();
    let currentUserId;

    if (userId) {
        currentUserId = userId;
    } else {
        currentUserId = auth.id;
    }

    const getStatisticByUser = async () => {

        const responceFromServer = await fetch(getStatisticsByUserId + currentUserId, {
            method: "GET"
        });

        if(responceFromServer.ok) {
            const result = await responceFromServer.json()
            setUserStatistic(result)
        }
    }

    const getStatisticByExercise = async () => {

        const responceFromServer = await fetch(getStatisticsByExerciseId + exerciseId, {
            method: "GET"
        });

        if(responceFromServer.ok) {
            const result = await responceFromServer.json()
            setExerciseStatistic(result);
        }
    }

    useEffect(() => {
        getStatisticByUser();
    }, [userId])

    useEffect(() => {
        getStatisticByExercise();
    }, [exerciseId])
    // const {data: exerciseStatistic, isLoading1, error1} = useFetch(getStatisticsByExerciseId + exerciseId);

    return (
        <table className="statistic__table">
            <thead>
                <tr>
                    <th>ID пользователя</th>
                    <th>№ Упражнения</th>
                    <th>Скорость набора</th>
                    <th>Точность</th>
                    <th>Процент пройденного</th>
                    <th>Статус</th>
                </tr>
            </thead>
            
            <tbody>
                {userStatistic && <CellOfStatistic data={userStatistic}/>}
                {exerciseStatistic && <CellOfStatistic data={exerciseStatistic}/>}
            </tbody> 
        </table>
    );
}
 
export default Table;