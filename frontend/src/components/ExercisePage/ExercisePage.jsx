import { useQuery } from "@tanstack/react-query";
import Card from "../Card/Card";
import AdminHeader from "../Headers/AdminHeader";
import useFetch from "../useFetch/useFetch";
import { getExercise } from "./../../helpers/links";

import "./style.scss"
import { useState } from "react";

const ExercisePage = () => {

    // const {data, isLoading, error} = useFetch(getExercise);
    const [data, setData] = useState(
        [
            {
                id: 1,
                bestTime: "00:00",
                percent: 0,
                length: 20,
                difficult: 1
            },
            {
                id: 2,
                bestTime: "00:00",
                percent: 0,
                length: 50,
                difficult: 2
            },
            {
                id: 3,
                bestTime: "00:00",
                percent: 50,
                length: 70,
                difficult: 3
            }
        ]   
    );

    const [sortedExercise, setSortedExercise] = useState(data);
    const [classFilter, setClassFilter] = useState(
        {
            easy: '',
            medium: '',
            hard: ''
        }
    );
    
    const easy = [];
    const medium = [];
    const hard = [];
    

    data.map(exercises => {
        if(exercises.difficult === 1) easy.push(exercises)
        if(exercises.difficult === 2) medium.push(exercises);
        if(exercises.difficult === 3) hard.push(exercises);     
    })

    const handlerClick = (param) => {

        if(param.id == 1) {
            setSortedExercise(easy);
            setClassFilter({
                easy: 'active',
                medium: '',
                hard: ''
            }); 
        }
        
        if(param.id == 2) {
            setSortedExercise(medium);
            setClassFilter({
                easy: '',
                medium: 'active',
                hard: ''
            });
        }
        
        if(param.id == 3) {
            setSortedExercise(hard);  
            setClassFilter({
                easy: '',
                medium: '',
                hard: 'active'
            });  
        }
        
    }
    
    

    // const {data, isLoading, error} = useQuery(['exercises'], () => fetch(
    //     'https://jsonplaceholder.typicode.com/todos/1')
    //     .then(responce => responce.json()), 
    // )

    return (
        <>
        <AdminHeader/>
        
        <div className="exercise">
            <p className="exercise__title">Упражнения</p>
            <div className="exercise__wrapper">
                <div className="exercise__level">
                    <div className={`exercise__difficult ${classFilter.easy}`} id="1" onClick={e => {handlerClick(e.target)}}>Легкий уровень</div>
                    <div className={`exercise__difficult ${classFilter.medium}`} id="2" onClick={e => {handlerClick(e.target)}}>Средний уровень</div>
                    <div className={`exercise__difficult ${classFilter.hard}`} id="3" onClick={e => {handlerClick(e.target)}}>Сложный уровень</div>
                </div>
             
                <div className="exercise__container"> 
                    {data ? <Card exercises={sortedExercise}/> : <h1>Data not found</h1>}
                </div>
            </div>
            
        </div>
        </>
        
    );
}
 
export default ExercisePage;