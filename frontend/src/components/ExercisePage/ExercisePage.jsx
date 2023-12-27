import { useContext, useState } from "react";
import UserCard from "../Card/UserCard";
import AdminCard from "../Card/AdminCard";
import UserHeader from "../Headers/UserHeader";
import AdminHeader from "../Headers/AdminHeader";
import AuthContext from "../../context/AuthProvider";

import "./style.scss"


const ExercisePage = ({exercise}) => {
    const {auth} = useContext(AuthContext);

    const [classFilter, setClassFilter] = useState(
        {
            easy: 'active',
            medium: '',
            hard: ''
        }
    );
    
    const easy = [];
    const medium = [];
    const hard = [];

    // const easyAdmin = [];
    // const mediumAdmin = [];
    // const hardAdmin = [];

    const [sortedExercise, setSortedExercise] = useState(easy);
    // const [sortedExerciseAdmin, setSortedExerciseAdmin] = useState(easyAdmin);

    exercise.map(exercise => {
        if(exercise.idDifficultyLevel === 1) easy.push(exercise)
        if(exercise.idDifficultyLevel === 2) medium.push(exercise);
        if(exercise.idDifficultyLevel === 3) hard.push(exercise);     
    })
    

    // adminExercise.map(exercises => {
    //     if(exercises.idDifficultyLevel === 1) easyAdmin.push(exercises)
    //     if(exercises.idDifficultyLevel === 2) mediumAdmin.push(exercises);
    //     if(exercises.idDifficultyLevel === 3) hardAdmin.push(exercises);     
    // })


    const handlerClick = (param) => {

        if(param.id === "1") {
            setSortedExercise([]);
            setSortedExercise(easy);
            // setSortedExerciseAdmin(easyAdmin);
            setClassFilter({
                easy: 'active',
                medium: '',
                hard: ''
            }); 
        }
        
        if(param.id === "2") {
            setSortedExercise([]);
            setSortedExercise([...medium]);
            // setSortedExerciseAdmin(mediumAdmin);
            setClassFilter({
                easy: '',
                medium: 'active',
                hard: ''
            });
        }
        
        if(param.id === "3") {
            setSortedExercise([]);
            setSortedExercise([...hard]);
            // setSortedExerciseAdmin(hardAdmin);  
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
            <UserHeader/> : 
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
                        !auth.isAdmin ? 
                        <UserCard exercises={sortedExercise} /> :
                        <AdminCard exercises={sortedExercise} />
                    }
                </div>
            </div>
            
        </div>
        </>
        
    );
}
 
export default ExercisePage;