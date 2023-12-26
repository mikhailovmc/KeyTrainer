import { useState } from "react";
import AdminHeader from "../Headers/AdminHeader";
import CheckBoxes from "../CheckBoxes/CheckBoxes";
import Diagramm from "./Diagramm/Diagramm";
import Graph from "./Graph/Graph";
import Modal from "./../Modal/Modal";
import Table from "./Table/Table";

const AdminStatistic = () => {

    const [modalActiveUserId, setModalActiveUserId] = useState(false);
    const [modalActiveExerciseId, setModalActiveExerciseId] = useState(false);

    const [userId, setUserId] = useState();
    const [exerciseId, setExerciseId] = useState();
    const [logins, setLogins] = useState();
    const [names, setNames] = useState();

    const [selectedLogins, setSelectedLogins] = useState();
    const [selectedNames, setSelectedNames] = useState();

    const [classFilter, setClassFilter] = useState(
        {
            table: '',
            graph: '',
            diagram: ''
        }
    );

    const [chosenStatistic, setChosenStatistic] = useState()

    const handleLogins = (e) => {
        getLogins();
        setModalActiveUserId(true);
    }

    const handleExercise = (e) => {
        getNames();
        setModalActiveExerciseId(true);
    }

    const handleClickUserModal = (e) => {
        e.preventDefault();
        setUserId(selectedLogins);
        setModalActiveUserId(false);
        console.log('ИД пользователя', userId);
        setChosenStatistic(<Table userId={selectedLogins} />);
        setClassFilter(
            {
                table: 'active',
                graph: '',
                diagram: ''
            }
        )
    }

    const handleClickExerciseModal = (e) => {
        e.preventDefault();
        setExerciseId(selectedNames);
        setModalActiveExerciseId(false);
        // console.log('ИД упражнения', exerciseId);
        // setChosenStatistic(<Table userId={selectedLogins} exerciseId={selectedNames} />);
        setClassFilter(
            {
                table: 'active',
                graph: '',
                diagram: ''
            }
        )
    }

    const handlerClick = (param) => {

        if(param.id === "table") {
            setClassFilter({
                table: 'active',
                graph: '',
                diagram: ''
            }); 
        }
        
        if(param.id === "graph") {
            setClassFilter({
                table: '',
                graph: 'active',
                diagram: ''
            });
        }
        
        if(param.id === "diagram") { 
            setClassFilter({
                table: '',
                graph: '',
                diagram: 'active'
            });  
        }
        
    }

    //Получение списка всех логинов
    const getLogins = async () => {
        const response = await fetch("https://localhost:5001/api/User/GetLogins", {
            method: "Get"
        })
        let result = response.json()
        result.then((res) => {
            setLogins(res);
        });
    }

    //Получение списка всех упражнений
    const getNames = async () => {
        const response = await fetch("https://localhost:5001/api/Exercize/GetExercizeNames", {
            method: "Get"
        })
        let result = response.json()
        result.then((res) => {
            setNames(res);
        });
    }

    // const getAllStatistic = async () => {
    //     const response = await fetch("https://localhost:5001/api/Exercize/GetExercize", {
    //         method: "Get"
    //     })
    //     let result = response.json()
    //     result.then((res) => {
    //         setNames(res);
    //     });
    // }
   
    return (
        <>
        <AdminHeader/>
        <div className="statistic">
                <div className="container">
                    <div className="statistic__view-wrapper">
                        <div className={`statistic__view ${classFilter.table}`} id="table" onClick={e => {
                            handlerClick(e.target);
                            setChosenStatistic(<Table userId={userId}/>);
                            }}>Таблица
                        </div>
                        <div className={`statistic__view ${classFilter.graph}`} id="graph" onClick={e => {
                            handlerClick(e.target);
                            setChosenStatistic(<Graph userId={userId}/>);
                            }}>График
                        </div>
                        <div className={`statistic__view ${classFilter.diagram}`} id="diagram" onClick={e => {
                            handlerClick(e.target);
                            setChosenStatistic(<Diagramm userId={userId}/>);
                            }}>Диаграмма
                        </div>
                    </div>

                        <div className="statistic__view-wrapper">
                            <div className="statistic__view" onClick={handleLogins}>
                            Выбрать пользователя
                        </div>

                            <div className="statistic__view" onClick={handleExercise}>
                            Выбрать упражнение
                        </div>
                    </div> 
                        
                    <div className="statistic__wrapper">
                        {!userId && !exerciseId ? <p className="statistic__base-text">Для просмотра статистики необходимо ввести либо Id пользователя, либо Id упражнения</p> : chosenStatistic}
                    </div>           
                </div>
        </div>

        <Modal active={modalActiveUserId} setActive={setModalActiveUserId} text={[]}>
                <form>
                    <p className="modal__title">Выберите пользователя для поиска :</p>
                    <label>
                        
                        <CheckBoxes allOptions={logins} setSelected={setSelectedLogins} />
                    </label>
                    
                    <button className="modal__button" type="button" onClick={handleClickUserModal}>Посмотреть статистику</button>
                </form>
            </Modal>

            <Modal active={modalActiveExerciseId} setActive={setModalActiveExerciseId} text={[]}>
                <form>
                    <p className="modal__title">Выберите упражнение для поиска :</p>
                    <label>
                        <CheckBoxes allOptions={names} setSelected={setSelectedNames} />
                    </label>

                    <button className="modal__button" type="button" onClick={handleClickExerciseModal}>Посмотреть статистику</button>
                </form>
            </Modal>
        </>
    );
}
 
export default AdminStatistic;