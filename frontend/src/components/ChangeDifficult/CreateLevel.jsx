import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addExercise, getAutoExercise } from "../../helpers/links";
import AdminHeader from "../Headers/AdminHeader";
import Modal from "./../Modal/Modal";
import "./style.scss"

const CreateLevel = () => {

    const [idDifficultyLevel, setIdDifficultyLevel] = useState();
    const [countOfErrors, setCountOfErrors] = useState();
    const [maxTime, setMaxTime] = useState();
    const [text, setText] = useState();
    const [zone, setZone] = useState({
        zones: [],
        listOfZones: []
    });
    const [modalActive, setModalActive] = useState(false);
    const [errorText, setErrorText] = useState()

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

    const useCreateAuto = async (e) => {     
        e.preventDefault();
  
        const responceFromServer = await fetch(getAutoExercise, {
            method: "GET",
        });

        if(responceFromServer.ok) {
            const result = await responceFromServer.json();
            console.log(result)
            setIdDifficultyLevel(result.idDifficultyLevel)
            setCountOfErrors(result.countOfErrors)
            setMaxTime(result.maxTime);
            setZone({
                zones: [...result.listOfZones],
                listOfZones: [...result.listOfZones]
            })
            setText(result.text)
        }    
    }

    const handleSave = async (e) => {
        e.preventDefault()
        let exerciseData = new FormData();

        exerciseData.append('idDifficultyLevel', idDifficultyLevel);
        exerciseData.append('countOfErrors', countOfErrors);
        exerciseData.append('maxTime', maxTime);
        exerciseData.append('text', text);
        exerciseData.append('listOfZones', [...zone.listOfZones]);

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
                alert('Упражнение успешно создано');
                navigate('/exercise')
            }
            console.log("Ответ сервера в авторизации", responceFromServer)

            if(!responceFromServer.ok) {
                const result = await responceFromServer.json();
                setErrorText(result);
                setModalActive(true);
            }

        } catch (error) {
            alert(error)
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
                        <input className="input" name="difficult" type="radio" value="1" checked={idDifficultyLevel == 1 ? true : false} onChange={e => setIdDifficultyLevel(e.target.value)}/>
                        Легкий
                    </label>
                    
                    <label className="changeDifficult__label">
                        <input className="input" name="difficult" type="radio" value="2"  checked={idDifficultyLevel == 2 ? true : false} onChange={e => setIdDifficultyLevel(e.target.value)}/>
                        Средний
                    </label>

                    <label className="changeDifficult__label">
                        <input className="input" name="difficult" type="radio" value="3"  checked={idDifficultyLevel == 3 ? true : false} onChange={e => setIdDifficultyLevel(e.target.value)}/>
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
                    <textarea className="textarea" name="" id="" required cols="30" rows="10" value={text} onChange={e => setText(e.target.value)}></textarea>

                    
                    <label className="changeDifficult__label">
                        Допустимое количество ошибок:
                        <input className="input-text" type="number" required  value={countOfErrors} onChange={e => setCountOfErrors(e.target.value)}/>
                    </label>

                    <label className="changeDifficult__label">
                        Время на выполнение:
                        <input className="input-text" type="number" required value={maxTime} onChange={e => setMaxTime(e.target.value)}/>
                    </label>

                    <div className="buttons-wrapper">
                        <button className="button"onClick={useCreateAuto}>Создать упражнения автоматически</button>
                        <button className="button" onClick={handleSave}>Сохранить</button>
                    </div>
                    

                </form>
            </div>

            {errorText && <Modal active={modalActive} setActive={setModalActive} text={errorText}/>}
        </>
    );
}
 
export default CreateLevel;