import ExercisePage from "./ExercisePage";
import AuthContext from "../../context/AuthProvider";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { getExercisesForUser, getExercises } from "./../../helpers/links";

const GetDataFromServer = () => {
    const {auth} = useContext(AuthContext);
    const [exerciseList, setExrciseList] = useState();
    // const [dataAdmin, setDataAdmin] = useState();

    // let dataUser = [];
    // let dataAdmin = [];
    // const axios = require('axios');
    useEffect(() => {
        if (auth.isAdmin) {
            axios.get(getExercises)    // Возвращение обещаний используя get-запрос
            .then((response) => {                       // Получение данных и их обработка
            const data = response.data;
            setExrciseList(data);
            })
            .catch((error) => {                         // Если запрос не будет выполнен, то ошибка выводится в терминал
            console.error(error);});
        }
    }, [setExrciseList])

    useEffect(() => {
        if (!auth.isAdmin) {
            axios.get(getExercisesForUser + auth.id)    // Возвращение обещаний используя get-запрос
            .then((response) => {                       // Получение данных и их обработка
            const data = response.data;
            setExrciseList(data);
            })
            .catch((error) => {                         // Если запрос не будет выполнен, то ошибка выводится в терминал
            console.error(error);});
        }
        
    }, [setExrciseList])

    return (
        <>
            {exerciseList &&  <ExercisePage exercise={exerciseList}/>}     
        </>
        
    )
    
}
 
export default GetDataFromServer;