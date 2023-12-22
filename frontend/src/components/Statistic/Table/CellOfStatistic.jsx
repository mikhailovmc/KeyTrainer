const CellOfStatistic = ({data:statistics}) => {
    console.log(statistics);

    return (
        statistics.map(statistic => {
            return (
                <tr key={statistic.id}>
                    <td>{statistic.idUser}</td>
                    <td>{statistic.idExercize}</td>
                    <td>{statistic.typingSpeed}</td>
                    <td>{statistic.accuracy}</td>
                    <td>{statistic.lengthPercentage}</td>
                    <td>{statistic.status}</td>
                </tr>
            )
        })
    );
}
 
export default CellOfStatistic;