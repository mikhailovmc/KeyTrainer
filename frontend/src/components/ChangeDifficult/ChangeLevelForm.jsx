import { useEffect, useState } from "react";
import { updateExercize, getAutoExercise } from "../../helpers/links";
import { useNavigate } from "react-router-dom";

const ChangeLevelForm = ({exercise}) => {
    const [currentExercise, setCurrentExercise] = useState(exercise)
    const [idDifficultyLevel, setIdDifficultyLevel] = useState(currentExercise.idDifficultyLevel);
    const [countOfErrors, setCountOfErrors] = useState(currentExercise.countOfErrors);
    const [maxTime, setMaxTime] = useState(currentExercise.maxTime);
    const [text, setText] = useState(currentExercise.text);
    const [zone, setZone] = useState({
        zones: [...currentExercise.listOfZones],
        listOfZones: [...currentExercise.listOfZones]
    });
    const navigate = useNavigate();


    const chooseZone = (e) => {
        const { value, checked } = e.target;
        const { zones } = zone;

        if (checked) {
            setZone({
                zones: [...zones, value],
                listOfZones: [...zones, value]
            });
        } else {
            setZone({
                zones: zones.filter(e => e !== value),
                listOfZones: zones.filter(e => e !== value)
            })
        }
    }

    const handleCreateAuto = async (e) => {
        e.preventDefault()
        const responceFromServer = await fetch(getAutoExercise, {
            method: "POST",
        });
        console.log("Ответ сервера в авторизации", responceFromServer)

        if(responceFromServer.ok) {
            let result = await responceFromServer.json()
            console.log(result)
            setCurrentExercise(result);
        }
    }
    
    const  handleSave = async (e) => {
        e.preventDefault();
        
        let exerciseData = new FormData();

        exerciseData.append('id', exercise.id);
        exerciseData.append('idDifficultyLevel', idDifficultyLevel);
        exerciseData.append('countOfErrors', countOfErrors);
        exerciseData.append('maxTime', maxTime);
        exerciseData.append('text', text);
        exerciseData.append('listOfZones', zone.listOfZones);

        const data = {
            id: exercise.id,
            text,
            idDifficultyLevel,
            countOfErrors,
            maxTime,
            listOfZones: zone.listOfZones
        }
        console.log(data)

        try {
            const responceFromServer = await fetch(updateExercize, {
                method: 'POST',
                body: exerciseData
            });

            if(responceFromServer.ok) {
                navigate('/exercise')
            }
            console.log("Ответ сервера в авторизации", responceFromServer)

        } catch (error) {
            alert(error)
        }
    }

    return (
        <form className="changeDifficult__form" action="">
            <p className="changeDifficult__title">Редактирование упражнения</p>
            <p className="changeDifficult__id">ID упражнения: {currentExercise.id}</p>
            <p className="changeDifficult__text">Выбор уровня сложности:</p>
            <label className="changeDifficult__label">
                <input className="input" name="difficult" type="radio" defaultChecked={currentExercise.idDifficultyLevel === 1 ? "true" : ""} data-id="1" onChange={e => setIdDifficultyLevel(e.target.dataset.id)}/>
                Легкий
            </label>
                        
            <label className="changeDifficult__label">
                <input className="input" name="difficult" type="radio"  defaultChecked={currentExercise.idDifficultyLevel === 2 ? "true" : ""} data-id="2" onChange={e => setIdDifficultyLevel(e.target.dataset.id)}/>
                Средний
            </label>

            <label className="changeDifficult__label">
                <input className="input" name="difficult" type="radio"  defaultChecked={currentExercise.idDifficultyLevel === 3 ? "true" : ""} data-id="3" onChange={e => setIdDifficultyLevel(e.target.dataset.id)}/>
                Сложный
            </label>

            <p className="changeDifficult__text">Выбор зон клавиатуры:</p>
            <div className="changeDifficult__zone">
                <label className="changeDifficult__label inner--label">
                    <input className="input-checkbox" type="checkbox" defaultChecked={currentExercise.listOfZones.includes("1")}  value="1" onClick={chooseZone}/>
                    1
                </label>

                <label className="changeDifficult__label inner--label">
                    <input className="input-checkbox" type="checkbox" defaultChecked={currentExercise.listOfZones.includes("2")} value="2" onClick={chooseZone}/>
                    2
                </label>

                <label className="changeDifficult__label inner--label">
                    <input className="input-checkbox" type="checkbox" defaultChecked={currentExercise.listOfZones.includes("3")} value="3" onClick={chooseZone}/>
                    3
                </label>

                <label className="changeDifficult__label inner--label">
                    <input className="input-checkbox" type="checkbox" defaultChecked={currentExercise.listOfZones.includes("4")} value="4" onClick={chooseZone}/>
                    4
                </label>

                <label className="changeDifficult__label inner--label">
                    <input className="input-checkbox" type="checkbox" defaultChecked={currentExercise.listOfZones.includes("5")} value="5" onClick={chooseZone}/>
                    Пробел
                </label>
            </div>

                        
            <p className="changeDifficult__text">Текст для упражнения:</p>
            <textarea className="textarea" name="" id="" cols="30" rows="10" defaultValue={currentExercise.text} onChange={e => setText(e.target.value)}></textarea>
                        
            <label className="changeDifficult__label">
                Допустимое количество ошибок:
                <input className="input-text" type="number"  defaultValue={currentExercise.countOfErrors} onChange={e => setCountOfErrors(e.target.value)}/>
            </label>

            <label className="changeDifficult__label">
                Время на выполнение:
                <input className="input-text" type="number" defaultValue={currentExercise.maxTime}  onChange={e => setMaxTime(e.target.value)}/>
            </label>

            <div className="buttons-wrapper">
                <button className="button" onClick={handleCreateAuto}>Создать упражнения автоматически</button>
                <button className="button" onClick={handleSave}>Сохранить</button>
            </div>
                        

        </form>
    );
}
 
export default ChangeLevelForm;