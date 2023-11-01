import { useQuery } from "@tanstack/react-query";
import Card from "../Card/Card";
import Header from "../Headers/Header";
import useFetch from "../useFetch/useFetch";
import { getExercises } from "./../../helpers/links";

import "./style.scss"

const ExercisePage = () => {

    // // const {data, isLoading, error} = useFetch(getExercises);
    // const {data, isLoading, error} = useQuery(['exercises'], () => fetch(
    //     'https://jsonplaceholder.typicode.com/todos/1')
    //     .then(responce => responce.json()), 
    // )

    return (
        <>
        <Header links={[{text: "Инструкция", route: "/instruction"}, {text: "Регистрация", route: "/registration"}]}/>
        
        <div className="exercise">
            <p className="exercise__title">Упражнения</p>
            <div className="exercise__wrapper">
                <div className="exercise__level">
                    <div className="exercise__difficult active">Легкий уровень</div>
                    <div className="exercise__difficult ">Средний уровень</div>
                    <div className="exercise__difficult ">Сложный уровень</div>
                </div>
             
                <div className="exercise__container"> 
                    {/* {data ? <h1>ToDo: {data.title}</h1> : <h1>Data not found</h1>}  */}
                    {/* {data && <Card exercises={data}/>} */}
                </div>
            </div>
            
        </div>
        </>
        
    );
}
 
export default ExercisePage;