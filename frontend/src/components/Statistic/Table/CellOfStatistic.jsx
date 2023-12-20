const CellOfStatistic = ({data:statistics}) => {
    return (
        statistics.map(statistic => {
            console.log(statistic)
            return (
                <tr key={statistic.id}>
                    <td>{statistic.idExercize}</td>
                    <td>{statistic.idUser}</td>
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