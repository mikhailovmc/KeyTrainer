import { useParams } from "react-router-dom";
import useFetch from "../../useFetch/useFetch";
import { getExercisesById } from "../../helpers/links";
import { useEffect, useState } from "react";
import AdminHeader from "../Headers/AdminHeader";

const ChangeLevel = () => {

    const {id} = useParams();
    console.log(id)

    const [exercise, setExercise] = useState();
    // const {data: exercise, isLoading, error} = useFetch(getExercisesById + '/' + id);
    
    async function getData() {
        try {
            const responce = await fetch(getExercisesById + '/' + id, {
                method: "GET",
            })
            console.log(responce)
            console.log(responce.json())
            .then(res => res.json())
            .then(exercise => {
                setExercise(exercise)
            })
        } catch (e) {
            alert(e)
        }
    }

    console.log(exercise)

    
        
    
    // fetch(getExercisesById + '/' + id, {
    //     method: "GET",
    // })
    // .then(res => res.json())
    // .then(exercise => {
    //     setExercise(exercise)
    // })


    useEffect(() => {
        
    }, [])
    
    console.log(exercise)


    const [difficult, setDifficult] = useState();
    const [errors, setErrors] = useState();
    const [time, setTime] = useState();
    const zone = []

    const chooseZone = (id) => {
        zone.push(id);
    }

    console.log(zone)

    const handleSave = (e) => {
        e.preventDefault()
        let exerciseData = new FormData();

        exerciseData.append('difficult', difficult);
        exerciseData.append('errors', errors);
        exerciseData.append('time', time);

        const data = {
            difficult,
            errors,
            time, 
            zone
        }
        console.log(data)
    }
    return ( 
        <>
            <AdminHeader/>

            <div className="changeDifficult">
                <form className="changeDifficult__form" action="">
                    <p className="changeDifficult__title">Редактирование упражнения</p>
                    <p className="changeDifficult__id">ID упражнения: {exercise.id}</p>
                    <p className="changeDifficult__text">Выбор уровня сложности:</p>
                    <label className="changeDifficult__label">
                        <input className="input" name="difficult" type="radio" id="easy" onChange={e => setDifficult(e.target.id)}/>
                        Легкий
                    </label>
                    
                    <label className="changeDifficult__label">
                        <input className="input" name="difficult" type="radio" id="medium" onChange={e => setDifficult(e.target.id)}/>
                        Средний
                    </label>

                    <label className="changeDifficult__label">
                        <input className="input" name="difficult" type="radio" id="hard" onChange={e => setDifficult(e.target.id)}/>
                        Сложный
                    </label>

                    <p className="changeDifficult__text">Выбор зон клавиатуры:</p>
                    <div className="changeDifficult__zone">
                        <label className="changeDifficult__label inner--label">
                            <input className="input-checkbox" type="checkbox" id="1" onClick={e => chooseZone(e.target.id)}/>
                            1
                        </label>

                        <label className="changeDifficult__label inner--label">
                            <input className="input-checkbox" type="checkbox" id="2" onClick={e => chooseZone(e.target.id)}/>
                            2
                        </label>

                        <label className="changeDifficult__label inner--label">
                            <input className="input-checkbox" type="checkbox" id="3" onClick={e => chooseZone(e.target.id)}/>
                            3
                        </label>

                        <label className="changeDifficult__label inner--label">
                            <input className="input-checkbox" type="checkbox" id="4" onClick={e => chooseZone(e.target.id)}/>
                            4
                        </label>

                        <label className="changeDifficult__label inner--label">
                            <input className="input-checkbox" type="checkbox" id="5" onClick={e => chooseZone(e.target.id)}/>
                            Пробел
                        </label>
                    </div>

                    

                    
                    <label className="changeDifficult__label">
                        Допустимое количество ошибок:
                        <input className="input-text" type="number" defaultValue={exercise.countOfErrors} onChange={e => setErrors(e.target.value)}/>
                    </label>

                    <label className="changeDifficult__label">
                        Время на выполнение:
                        <input className="input-text" type="number" defaultValue={exercise.maxTime} onChange={e => setTime(e.target.value)}/>
                    </label>

                    <div className="buttons-wrapper">
                        <button className="button">Создать упражнения автоматически</button>
                        <button className="button" onClick={handleSave}>Сохранить</button>
                    </div>
                    

                </form>
            </div>
        </>
    );
}
 
export default ChangeLevel;