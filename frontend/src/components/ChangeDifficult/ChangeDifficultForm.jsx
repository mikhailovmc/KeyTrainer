import { useState } from "react";


const ChangeDifficultForm = ({exercise}) => {
    const easy = exercise[1];
    const medium = exercise[2];
    const difficult = exercise[3];

    const [currentDifficult, setCurrentDifficult] = useState(easy);
    console.log(currentDifficult);
    
    const [idDifficultyLevel, setIdDifficultyLevel] = useState();
    const [countOfErrors, setCountOfErrors] = useState();
    const [maxLength, setMaxLength] = useState();
    const [zone, setZone] = useState({
        zones: [exercise.listOfZones],
        listOfZones: [exercise.listOfZones]
    });

    
    // if (idDifficultyLevel == 1) exercise = [...easy];
    // if (idDifficultyLevel == 2) exercise = [...medium];
    // if (idDifficultyLevel == 3) exercise = [...difficult];

    // const chooseZone = (e) => {
    //     const { value, checked } = e.target;
    //     const { zones } = zone;

    //     if (checked) {
    //         setZone({
    //             zones: [...zones, value],
    //             listOfZones: [...zones, value]
    //         });
    //     } else {
    //         setZone({
    //             zones: zones.filter(e => e !== value),
    //             listOfZones: zones.filter(e => e !== value)
    //         })
    //     }
    // }    

    return (
        <form className="changeDifficult__form" action="">
        {/* //     <p className="changeDifficult__title">Редактирование уровня сложности</p>

        //     <p className="changeDifficult__text">Выбор уровня сложности:</p>
        //     <label className="changeDifficult__label">
        //         <input className="input" name="difficult" type="radio" defaultChecked={exercise.idDifficultyLevel === 1 ? "true" : ""} data-id="1" onChange={e => setIdDifficultyLevel(e.target.dataset.id)}/>
        //         Легкий
        //     </label>
                                
        //     <label className="changeDifficult__label">
        //         <input className="input" name="difficult" type="radio"  defaultChecked={exercise.idDifficultyLevel === 2 ? "true" : ""} data-id="2" onChange={e => setIdDifficultyLevel(e.target.dataset.id)}/>
        //         Средний
        //     </label>

        //     <label className="changeDifficult__label">
        //         <input className="input" name="difficult" type="radio"  defaultChecked={exercise.idDifficultyLevel === 3 ? "true" : ""} data-id="3" onChange={e => setIdDifficultyLevel(e.target.dataset.id)}/>
        //         Сложный
        //     </label>

        //     <p className="changeDifficult__text">Выбор зон клавиатуры:</p>
        //     <div className="changeDifficult__zone">
        //         <label className="changeDifficult__label inner--label">
        //             <input className="input-checkbox" type="checkbox" defaultChecked={exercise.listOfZones.includes("1")}  value="1" onClick={chooseZone}/>
        //             1
        //         </label>

        //         <label className="changeDifficult__label inner--label">
        //             <input className="input-checkbox" type="checkbox" defaultChecked={exercise.listOfZones.includes("2")} value="2" onClick={chooseZone}/>
        //             2
        //         </label>

        //         <label className="changeDifficult__label inner--label">
        //             <input className="input-checkbox" type="checkbox" defaultChecked={exercise.listOfZones.includes("3")} value="3" onClick={chooseZone}/>
        //             3
        //         </label>

        //         <label className="changeDifficult__label inner--label">
        //             <input className="input-checkbox" type="checkbox" defaultChecked={exercise.listOfZones.includes("4")} value="4" onClick={chooseZone}/>
        //              4
        //         </label>

        //         <label className="changeDifficult__label inner--label">
        //             <input className="input-checkbox" type="checkbox" defaultChecked={exercise.listOfZones.includes("5")} value="5" onClick={chooseZone}/>
        //             Пробел
        //         </label>
        //     </div>

        //     <label className="changeDifficult__label">
        //         Допустимое количество ошибок:
        //         <input className="input-text" type="number"  defaultValue={exercise.countOfErrors} onChange={e => setCountOfErrors(e.target.value)}/>
        //     </label>

        //     <label className="changeDifficult__label">
        //         Максимальная длина упражнения:
        //         <input className="input-text" type="number" defaultValue={exercise.length}  onChange={e => setMaxTime(e.target.value)}/>
        //     </label>

        //     <div className="buttons-wrapper">
        //         <button className="button" >Сохранить</button>
        //     </div> */}
        </form>
    );
}
 
export default ChangeDifficultForm;