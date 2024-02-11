import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateDifficultLevel, getDifficultyLevel } from "../../helpers/links";
import Modal from "./../Modal/Modal";
import KeyboardZone from "./KeyboardZone/KeyboardZone";

const ChangeDifficultForm = ({easy, middle, hard}) => {

    const [currentDifficult, setCurrentDifficult] = useState(easy);
    const [idDifficultyLevel, setIdDifficultyLevel] = useState(currentDifficult.id);
    const [countOfErrors, setCountOfErrors] = useState(currentDifficult.countOfErrors);
    const [maxLength, setMaxLength] = useState(currentDifficult.maxLength);
    const [zone, setZone] = useState({
        zones: [...currentDifficult.listOfZones],
        listOfZones: [...currentDifficult.listOfZones]
    });
    const [modalActive, setModalActive] = useState(false);
    const [errorText, setErrorText] = useState()
    
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

    const navigateToPage = () => {
        navigate("/exercise")
    }

    const handleSave = async (e) => {
        e.preventDefault();
        setErrorText("")
        let difficultData = new FormData();

        difficultData.append('id', idDifficultyLevel);
        difficultData.append('countOfErrors', countOfErrors);
        difficultData.append('maxLength', maxLength);
        difficultData.append('listOfZones', zone.listOfZones);

        try {
            const responceFromServer = await fetch(updateDifficultLevel, {
                method: 'POST',
                body: difficultData
            });

            if(responceFromServer.ok) {
                setModalActive(true);
                setTimeout(navigateToPage, 2000);
            }
            
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
                        setIdDifficultyLevel(e.target.dataset.id);
                        changeState(hard);
                        }}/>
                    Сложный
                </label>

                <KeyboardZone func={chooseZone} zones={zone} />

                <label className="changeDifficult__label">
                    Допустимое количество ошибок:
                    <input className="input-text" type="number"  value={countOfErrors} onChange={e => setCountOfErrors(e.target.value)} required/>
                </label>

                <label className="changeDifficult__label">
                    Максимальная длина упражнения:
                    <input className="input-text" type="number" value={maxLength}  onChange={e => setMaxLength(e.target.value)} required/>
                </label>

                <div className="buttons-wrapper">
                    <button className="button" onClick={handleSave}>Сохранить</button>
                </div>
            </form>

            {errorText ? 
                <Modal active={modalActive} setActive={setModalActive} text={errorText}>
                    <p className="modal__title">Ошибка!</p>
                </Modal> :
                <Modal active={modalActive} setActive={setModalActive} text={[]}>
                    <p className="modal__title">Уровень сложности изменен!</p>
                </Modal>
            }
        </>
        

        
    );
}
 
export default ChangeDifficultForm;