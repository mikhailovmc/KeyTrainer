import CellOfStatistic from "./CellOfStatistic";
import AuthContext from "../../../context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import useFetch from "../../../useFetch/useFetch";
import { getStatisticsByExerciseId, getStatisticsByUserId } from "../../../helpers/links";

import "./../style.scss";

const Table = ({userId, exerciseId}) => {
    const { auth } = useContext(AuthContext);

    let currentUserId;
    if (userId) currentUserId = userId;
    else currentUserId = auth.id

    
 
    const {data: userStatistic, isLoading, error} = useFetch(getStatisticsByUserId + currentUserId);
    const {data: exerciseStatistic, isLoading1, error1} = useFetch(getStatisticsByExerciseId + exerciseId);

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