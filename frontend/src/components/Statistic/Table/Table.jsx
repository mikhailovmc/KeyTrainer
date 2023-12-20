import CellOfStatistic from "./CellOfStatistic";

const Table = (data) => {
    return (
        <table  className="statictic__table">
                <tr>
                    <th>№ Упражнения</th>
                    <th>ID пользователя</th>
                    <th>Скорость набора</th>
                    <th>Точность</th>
                    <th>Процент пройденного</th>
                    <th>Статус</th>
                </tr>
                
                {data && <CellOfStatistic  data={data}/>}
            </table>
    );
}
 
export default Table;