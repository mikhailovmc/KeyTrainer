import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addExercise, getAutoExercise } from "../../helpers/links";
import AdminHeader from "../Headers/AdminHeader";
import Modal from "./../Modal/Modal";
import "./style.scss"
import KeyboardZone from "./KeyboardZone/KeyboardZone";
import LabelExercise from "./LabelExercise/LabelExercise";
import DifficultZone from "./DifficultZone/DifficultZone";

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

    const navigateToPage = () => {
        navigate("/exercise")
    }

    const handleSave = async (e) => {
        e.preventDefault();
        setErrorText("");
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

        try {
            const responceFromServer = await fetch(addExercise, {
                method: 'POST',
                body: exerciseData
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
            <AdminHeader/>
            <div className="changeDifficult">
                <form className="changeDifficult__form" action="">
                    <p className="changeDifficult__title">Создание упражнения</p>
                    <DifficultZone idDifficultyLevel={idDifficultyLevel} setIdDifficultyLevel={setIdDifficultyLevel}/>
                    <KeyboardZone func={chooseZone} zones={zone} />

                    <p className="changeDifficult__text">Текст для упражнения:</p>
                    <textarea className="textarea" required cols="30" rows="10" value={text} onChange={e => setText(e.target.value)}></textarea>

                    <LabelExercise value={countOfErrors} func={setCountOfErrors} inputType={"number"}>
                        Допустимое количество ошибок:
                    </LabelExercise>

                    <LabelExercise value={maxTime} func={setMaxTime} inputType={"number"}>
                        Время на выполнение:
                    </LabelExercise>

                    <div className="buttons-wrapper">
                        <button className="button" onClick={useCreateAuto}>Создать упражнения автоматически</button>
                        <button className="button" onClick={handleSave}>Сохранить</button>
                    </div>
                </form>
            </div>

            {errorText ? 
                <Modal active={modalActive} setActive={setModalActive} text={errorText}>
                    <p className="modal__title">Ошибка!</p>
                </Modal> :
                <Modal active={modalActive} setActive={setModalActive} text={[]}>
                    <p className="modal__title">Упражнение успешно создано!</p>
                </Modal>
            }
        </>
    );
}
 
export default CreateLevel;