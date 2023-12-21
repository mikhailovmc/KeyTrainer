import CellOfStatistic from "./CellOfStatistic";
import AuthContext from "../../../context/AuthProvider";
import { useContext } from "react";
import useFetch from "../../../useFetch/useFetch";
import { getStatisticsByUserId } from "../../../helpers/links";

import "./../style.scss";

const Table = () => {
    const { auth } = useContext(AuthContext);

    const {data, isLoading, error} = useFetch(getStatisticsByUserId + auth.id);

    return (
        <table className="statistic__table">
            <thead>
                <tr>
                    <th>№ Упражнения</th>
                    <th>ID пользователя</th>
                    <th>Скорость набора</th>
                    <th>Точность</th>
                    <th>Процент пройденного</th>
                    <th>Статус</th>
                </tr>
            </thead>
            
            <tbody>
                {data && <CellOfStatistic  data={data}/>}
            </tbody> 
        </table>
    );
}
 
export default Table;