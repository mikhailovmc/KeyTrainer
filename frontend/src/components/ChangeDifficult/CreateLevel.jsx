import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addExercise, getAutoExercise } from "../../helpers/links";
import useFetch from "../../useFetch/useFetch";
import AdminHeader from "../Headers/AdminHeader";
import "./style.scss"

const CreateLevel = () => {
    // const [currentExercise, setCurrentExercise] = useState();

    const [idDifficultyLevel, setIdDifficultyLevel] = useState();
    const [countOfErrors, setCountOfErrors] = useState();
    const [maxTime, setMaxTime] = useState();
    const [text, setText] = useState();
    const [zone, setZone] = useState({
        zones: [],
        listOfZones: []
    });
    const [difficult, setDifficult] = useState({})
    const [flag, setFlag] = useState(false);
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

    const handleSave = async (e) => {
        e.preventDefault()
        let exerciseData = new FormData();

        exerciseData.append('idDifficultyLevel', idDifficultyLevel);
        exerciseData.append('countOfErrors', countOfErrors);
        exerciseData.append('maxTime', maxTime);
        exerciseData.append('text', text);
        exerciseData.append('listOfZones', zone.listOfZones);

        const data = {
            idDifficultyLevel,
            countOfErrors,
            maxTime,
            text, 
            listOfZones: zone.listOfZones
        }
        console.log(data)

        try {
            const responceFromServer = await fetch(addExercise, {
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

    const useCreateAuto = async (e) => {       
        const responceFromServer = await fetch(getAutoExercise, {
            method: "GET",
        });
        console.log("Ответ сервера в авторизации", responceFromServer)

        if(responceFromServer.ok) {
            const result = await responceFromServer.json();
            setIdDifficultyLevel(result.idDifficultyLevel)
            setCountOfErrors(result.countOfErrors)
            setMaxTime(result.maxTime)
            setText(result.text)
            setZone({
                zones: [...result.listOfZones],
                listOfZones: [...result.listOfZones]
            })
        }    
    }

    return (
        <>
            <AdminHeader/>

            <div className="changeDifficult">
            <form className="changeDifficult__form" action="">
                    <p className="changeDifficult__title">Создание упражнения</p>
                    <p className="changeDifficult__text">Выбор уровня сложности:</p>
                    <label className="changeDifficult__label">
                        <input className="input" name="difficult" type="radio" data-id="1" checked={idDifficultyLevel === 1} onChange={e => setIdDifficultyLevel(e.target.dataset.id)}/>
                        Легкий
                    </label>
                    
                    <label className="changeDifficult__label">
                        <input className="input" name="difficult" type="radio" data-id="2"  checked={idDifficultyLevel === 2} onChange={e => setIdDifficultyLevel(e.target.dataset.id)}/>
                        Средний
                    </label>

                    <label className="changeDifficult__label">
                        <input className="input" name="difficult" type="radio" data-id="3"  checked={idDifficultyLevel === 3} onChange={e => setIdDifficultyLevel(e.target.dataset.id)}/>
                        Сложный
                    </label>

                    <p className="changeDifficult__text">Выбор зон клавиатуры:</p>
                    <div className="changeDifficult__zone">
                        <label className="changeDifficult__label inner--label">
                            <input className="input-checkbox" type="checkbox" value="1" checked={zone.listOfZones.includes("1")} onChange={chooseZone}/>
                            1
                        </label>

                        <label className="changeDifficult__label inner--label">
                            <input className="input-checkbox" type="checkbox" value="2" checked={zone.listOfZones.includes("2")} onChange={chooseZone}/>
                            2
                        </label>

                        <label className="changeDifficult__label inner--label">
                            <input className="input-checkbox" type="checkbox" value="3" checked={zone.listOfZones.includes("3")} onChange={chooseZone}/>
                            3
                        </label>

                        <label className="changeDifficult__label inner--label">
                            <input className="input-checkbox" type="checkbox" value="4" checked={zone.listOfZones.includes("4")} onChange={chooseZone}/>
                            4
                        </label>
                    </div>

                    <p className="changeDifficult__text">Текст для упражнения:</p>
                    <textarea className="textarea" name="" id="" required cols="30" rows="10" defaultValue={text} onChange={e => setText(e.target.value)}></textarea>

                    
                    <label className="changeDifficult__label">
                        Допустимое количество ошибок:
                        <input className="input-text" type="number" required  defaultValue={countOfErrors} onChange={e => setCountOfErrors(e.target.value)}/>
                    </label>

                    <label className="changeDifficult__label">
                        Время на выполнение:
                        <input className="input-text" type="number" required defaultValue={maxTime} onChange={e => setMaxTime(e.target.value)}/>
                    </label>

                    <div className="buttons-wrapper">
                        <button className="button"onClick={useCreateAuto}>Создать упражнения автоматически</button>
                        <button className="button" onClick={handleSave}>Сохранить</button>
                    </div>
                    

                </form>
            </div>
        </>
    );
}
 
export default CreateLevel;