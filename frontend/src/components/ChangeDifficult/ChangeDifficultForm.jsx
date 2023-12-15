import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateDifficultLevel, getDifficultyLevel } from "../../helpers/links";
import useFetch from "../../useFetch/useFetch";

const ChangeDifficultForm = ({easy, middle, hard}) => {

    const [currentDifficult, setCurrentDifficult] = useState(easy);
    console.log(currentDifficult);
    
    const [idDifficultyLevel, setIdDifficultyLevel] = useState(currentDifficult.id);
    const [countOfErrors, setCountOfErrors] = useState(currentDifficult.countOfErrors);
    const [maxLength, setMaxLength] = useState(currentDifficult.maxLength);
    const [zone, setZone] = useState({
        zones: [...currentDifficult.listOfZones],
        listOfZones: [...currentDifficult.listOfZones]
    });
    
    const navigate = useNavigate();
    
    const changeState = (difficult) => {
        setCurrentDifficult(difficult)
        setIdDifficultyLevel(difficult.id);
        setCountOfErrors(difficult.countOfErrors);
        setMaxLength(difficult.maxLength);
        setZone({
            zones: [...difficult.listOfZones],
            listOfZones: [...difficult.listOfZones]
        })
    }

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
        e.preventDefault();
        let difficultData = new FormData();

        difficultData.append('id', idDifficultyLevel);
        difficultData.append('countOfErrors', countOfErrors);
        difficultData.append('maxLength', maxLength);
        difficultData.append('listOfZones', zone.listOfZones);

        const data = {
            id: idDifficultyLevel,
            countOfErrors,
            maxLength,
            listOfZones: zone.listOfZones
        }
        console.log(data)

        try {
            const responceFromServer = await fetch(updateDifficultLevel, {
                method: 'POST',
                body: difficultData
            });

            if(responceFromServer.ok) {
                const result = await responceFromServer.json()
                alert('Сложность успешно редактирована');
                navigate('/exercise')
            }
            // console.log("Ответ сервера в авторизации", responceFromServer)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <form className="changeDifficult__form" action="">
            <p className="changeDifficult__title">Редактирование уровня сложности</p>

            <p className="changeDifficult__text">Выбор уровня сложности:</p>
            <label className="changeDifficult__label">
                <input className="input" name="difficult" type="radio" defaultChecked={idDifficultyLevel === 1} data-id="1" onChange={e => {
                    setIdDifficultyLevel(e.target.dataset.id);
                    changeState(easy);
                    }}/>
                Легкий
            </label>
                                
            <label className="changeDifficult__label">
                <input className="input" name="difficult" type="radio"  defaultChecked={idDifficultyLevel === 2 } data-id="2" onChange={e => {
                    setIdDifficultyLevel(e.target.dataset.id);
                    changeState(middle);
                    }}/>
                Средний
            </label>

            <label className="changeDifficult__label">
                <input className="input" name="difficult" type="radio"  defaultChecked={idDifficultyLevel === 3 } data-id="3" onChange={e => {
                    setIdDifficultyLevel(e.target.dataset.id)
                    changeState(hard);}}/>
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
                    <input className="input-checkbox" type="checkbox" value="4" checked={zone.listOfZones.includes("4")}  onChange={chooseZone}/>
                     4
                </label>
            </div>

            <label className="changeDifficult__label">
                Допустимое количество ошибок:
                <input className="input-text" type="number"  value={countOfErrors} onChange={e => setCountOfErrors(e.target.value)}/>
            </label>

            <label className="changeDifficult__label">
                Максимальная длина упражнения:
                <input className="input-text" type="number" value={maxLength}  onChange={e => setMaxLength(e.target.value)}/>
             </label>

             <div className="buttons-wrapper">
                 <button className="button" onClick={handleSave}>Сохранить</button>
             </div>
        </form>
    );
}
 
export default ChangeDifficultForm;