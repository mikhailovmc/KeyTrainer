import { useState } from "react";
import AdminHeader from "../Headers/AdminHeader";

import "./style.scss"
import useFetch from "./../../useFetch/useFetch"
import { getDifficultyLevel } from "../../helpers/links";

const ChangeDifficult = () => {

    const [idDifficultyLevel, setIdDifficultyLevel] = useState();
    const [countOfErrors, setCountOfErrors] = useState();
    const [maxTime, setMaxTime] = useState();
    const [text, setText] = useState();
    const [zone, setZone] = useState({
        zones: [],
        listOfZones: []
    });

    const {data, isLoading, error} = useFetch(getDifficultyLevel + 1)

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

    return ( 
        <>
            <AdminHeader/>

            <div className="changeDifficult">
                
                {/* <form className="changeDifficult__form" action="">
                    <p className="changeDifficult__title">Редактирование уровня сложности</p>

                    <p className="changeDifficult__text">Выбор уровня сложности:</p>
                    <label className="changeDifficult__label">
                    <input className="input" name="difficult" type="radio" defaultChecked={exercise.idDifficultyLevel === 1 ? "true" : ""} data-id="1" onChange={e => setIdDifficultyLevel(e.target.dataset.id)}/>
                        Легкий
                    </label>
                                
                    <label className="changeDifficult__label">
                        <input className="input" name="difficult" type="radio"  defaultChecked={exercise.idDifficultyLevel === 2 ? "true" : ""} data-id="2" onChange={e => setIdDifficultyLevel(e.target.dataset.id)}/>
                        Средний
                    </label>

                    <label className="changeDifficult__label">
                        <input className="input" name="difficult" type="radio"  defaultChecked={exercise.idDifficultyLevel === 3 ? "true" : ""} data-id="3" onChange={e => setIdDifficultyLevel(e.target.dataset.id)}/>
                        Сложный
                    </label>

                    <p className="changeDifficult__text">Выбор зон клавиатуры:</p>
                    <div className="changeDifficult__zone">
                        <label className="changeDifficult__label inner--label">
                            <input className="input-checkbox" type="checkbox" value="1" onClick={chooseZone}/>
                            1
                        </label>

                        <label className="changeDifficult__label inner--label">
                            <input className="input-checkbox" type="checkbox" value="2" onClick={chooseZone}/>
                            2
                        </label>

                        <label className="changeDifficult__label inner--label">
                            <input className="input-checkbox" type="checkbox" value="3" onClick={chooseZone}/>
                            3
                        </label>

                        <label className="changeDifficult__label inner--label">
                            <input className="input-checkbox" type="checkbox" value="4" onClick={chooseZone}/>
                            4
                        </label>

                        <label className="changeDifficult__label inner--label">
                            <input className="input-checkbox" type="checkbox" value="5" onClick={chooseZone}/>
                            Пробел
                        </label>
                    </div>

                    

                    
                    <label className="changeDifficult__label">
                        Максимальное количество ошибок:
                        <input className="input-text" type="number" />
                    </label>

                    <label className="changeDifficult__label">
                        Максимальная длина упражнения:
                        <input className="input-text" type="number" />
                    </label>

                    <button className="button">Сохранить</button>

                </form> */}
            </div>
        </>
        
        
    );
}
 
export default ChangeDifficult;