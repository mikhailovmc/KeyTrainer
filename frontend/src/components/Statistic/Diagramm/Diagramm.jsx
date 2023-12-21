import React, { useContext, useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { getDiagram} from '../../../helpers/links';
import useFetch from '../../../useFetch/useFetch';
import AuthContext from '../../../context/AuthProvider';


ChartJS.register(ArcElement, Tooltip, Legend);


const Diagramm = () => {
    const {auth} = useContext(AuthContext);

    const {data:percent, isLoading, error} = useFetch(getDiagram + auth.id);
    const [dataPercent, setDataPercent] = useState();

    useEffect(() => {
        if (percent) {
            setDataPercent(percent.x);
        }
    }, [isLoading])

    const data = {
        //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          labels: ['% выполненых упражнений', '% не выполненых упражнений'],
          datasets: [
            {
              label: 'процент от общего числа',
              data: [dataPercent ,100-dataPercent ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        };

    

    return (
        <>
            {!isLoading ? <Pie data={data} /> : <p>Загрузка данных</p>}
        </>
    );
}
 
export default Diagramm;