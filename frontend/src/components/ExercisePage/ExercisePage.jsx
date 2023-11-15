import UserCard from "../Card/UserCard";
import AdminCard from "../Card/AdminCard";
import UserHeader from "../Headers/UserHeader";
import useFetch from "../../useFetch/useFetch";
import AuthContext from "../../context/AuthProvider";
import { getExercises } from "./../../helpers/links";

import "./style.scss"
import { useContext, useState } from "react";
import AdminHeader from "../Headers/AdminHeader";

const ExercisePage = () => {

    // const {data, isLoading, error} = useFetch(getExercises);
    // console.log(data)
    const [classFilter, setClassFilter] = useState(
        {
            easy: 'active',
            medium: '',
            hard: ''
        }
    );

    const [dataUser, setDataUser] = useState(
        [
            {
                id: 1,
                bestTime: "00:00",
                percent: 0,
                length: 20,
                idDifficultyLevel: 1
            },
            {
                id: 2,
                bestTime: "00:00",
                percent: 0,
                length: 50,
                idDifficultyLevel: 2
            },
            {
                id: 3,
                bestTime: "00:00",
                percent: 50,
                length: 70,
                idDifficultyLevel: 3
            }
        ]   
    );

    const [dataAdmin, setDataAdmin] = useState(
        [
            {
                id: 1,
                maxTime: "00:00",
                countOfErrors: 3,
                length: 20,
                idDifficultyLevel: 1
            },
            {
                id: 2,
                maxTime: "00:00",
                countOfErrors: 5,
                length: 50,
                idDifficultyLevel: 2
            },
            {
                id: 3,
                maxTime: "00:00",
                countOfErrors: 4,
                length: 70,
                idDifficultyLevel: 3
            }
        ]   
    );

    const { auth } = useContext(AuthContext);
    console.log("Проверка на админа", auth)
    
    const easyUser = [];
    const mediumUser = [];
    const hardUser = [];

    const easyAdmin = [];
    const mediumAdmin = [];
    const hardAdmin = [];

    const [sortedExerciseUser, setSortedExerciseUser] = useState(easyUser);
    const [sortedExerciseAdmin, setSortedExerciseAdmin] = useState(easyAdmin);

    dataUser.map(exercises => {
        if(exercises.idDifficultyLevel === 1) easyUser.push(exercises)
        if(exercises.idDifficultyLevel === 2) mediumUser.push(exercises);
        if(exercises.idDifficultyLevel === 3) hardUser.push(exercises);     
    })

    dataAdmin.map(exercises => {
        if(exercises.idDifficultyLevel === 1) easyAdmin.push(exercises)
        if(exercises.idDifficultyLevel === 2) mediumAdmin.push(exercises);
        if(exercises.idDifficultyLevel === 3) hardAdmin.push(exercises);     
    })


    const handlerClick = (param) => {

        if(param.id === "1") {
            setSortedExerciseUser(easyUser);
            setSortedExerciseAdmin(easyAdmin);
            setClassFilter({
                easy: 'active',
                medium: '',
                hard: ''
            }); 
        }
        
        if(param.id === "2") {
            setSortedExerciseUser(mediumUser);
            setSortedExerciseAdmin(mediumAdmin);
            setClassFilter({
                easy: '',
                medium: 'active',
                hard: ''
            });
        }
        
        if(param.id === "3") {
            setSortedExerciseUser(hardUser);
            setSortedExerciseAdmin(hardAdmin);  
            setClassFilter({
                easy: '',
                medium: '',
                hard: 'active'
            });  
        }
        
    }
    
    
    
    const title = auth.isAdmin === false ? "Упражнения" : "Редактирование упражнений";

    return (
        <>
        {auth.isAdmin === false ? 
            <UserHeader login={auth.data}/> : 
            <AdminHeader/>}
           
        <div className="exercise">
            <p className="exercise__title">{title}</p>
            <div className="exercise__wrapper">
                <div className="exercise__level">
                    <div className={`exercise__difficult ${classFilter.easy}`} id="1" onClick={e => {handlerClick(e.target)}}>Легкий уровень</div>
                    <div className={`exercise__difficult ${classFilter.medium}`} id="2" onClick={e => {handlerClick(e.target)}}>Средний уровень</div>
                    <div className={`exercise__difficult ${classFilter.hard}`} id="3" onClick={e => {handlerClick(e.target)}}>Сложный уровень</div>
                </div>
             
                <div className="exercise__container"> 
                    {
                        auth.isAdmin === false ? 
                        dataUser ? <UserCard exercises={sortedExerciseUser} /> : <h1>Data not found</h1> :
                        dataAdmin ? <AdminCard exercises={sortedExerciseAdmin} /> : <h1>Data not found</h1>
                    }
                </div>
            </div>
            
        </div>
        </>
        
    );
}
 
export default ExercisePage;