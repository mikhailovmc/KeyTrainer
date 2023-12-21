import ExercisePage from "./ExercisePage";
import AuthContext from "../../context/AuthProvider";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { getExercisesForUser, getExercises } from "./../../helpers/links";

const GetDataFromServer = () => {
    const {auth} = useContext(AuthContext);
    const [dataUser, setDataUser] = useState();
    const [dataAdmin, setDataAdmin] = useState();

    // let dataUser = [];
    // let dataAdmin = [];
    // const axios = require('axios');
    useEffect(() => {
        axios.get(getExercises)    // Возвращение обещаний используя get-запрос
        .then((response) => {                       // Получение данных и их обработка
            const data = response.data;
            setDataAdmin(data);
        })
        .catch((error) => {                         // Если запрос не будет выполнен, то ошибка выводится в терминал
        console.error(error);});
    }, [setDataAdmin])

    useEffect(() => {
        axios.get(getExercisesForUser + auth.id)    // Возвращение обещаний используя get-запрос
        .then((response) => {                       // Получение данных и их обработка
            const data = response.data;
            setDataUser(data);
        })
        .catch((error) => {                         // Если запрос не будет выполнен, то ошибка выводится в терминал
        console.error(error);});
    }, [setDataUser])

    return (
        <>
            { dataUser && dataAdmin && <ExercisePage userExercise={dataUser} adminExercise={dataAdmin}/>}
        </>
        
    )
    
}
 
export default GetDataFromServer;