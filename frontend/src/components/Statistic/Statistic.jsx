import UserHeader from "../Headers/UserHeader";
import { useContext, useEffect, useState } from "react";
import Table from "./Table/Table";
import "./style.scss";
import Diagramm from "./Diagramm/Diagramm";
import Graph from "./Graph/Graph";
import AuthContext from "../../context/AuthProvider";
import Modal from "../Modal/Modal";
import AdminHeader from "../Headers/AdminHeader";
import CheckBoxes from "../CheckBoxes/CheckBoxes";

const Statistic = () => {
    const {auth} = useContext(AuthContext);
    const [modalActiveUserId, setModalActiveUserId] = useState(false);
    const [modalActiveExerciseId, setModalActiveExerciseId] = useState(false);
    const [userId, setUserId] = useState();
    const [exerciseId, setExerciseId] = useState();
    const [chosenStatistic, setChosenStatistic] = useState(
        auth.id ? <Table userId={userId}/> : ''
    )

    const [logins, setLogins] = useState()
    const [names, setNames] = useState()
    const [selectedLogins, setSelectedLogins] = useState()
    const [selectedNames, setSelectedNames] = useState()

    const [classFilter, setClassFilter] = useState(
        auth.id ? 
        {
            table: 'active',
            graph: '',
            diagram: ''
        }
        :
        {
            table: '',
            graph: '',
            diagram: ''
        }

    );


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

    const handleClickUserModal = (e) => {
        e.preventDefault();
        setUserId(selectedLogins);
        setModalActiveUserId(false);
        console.log('ИД пользователя', userId);
        setChosenStatistic(<Table userId={selectedLogins} exerciseId={selectedNames} />);
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
        setModalActiveExerciseId(false);
        setExerciseId(selectedNames);
        console.log('ИД упражнения', exerciseId);
        setChosenStatistic(<Table userId={selectedLogins} exerciseId={selectedNames} />);
        setClassFilter(
            {
                table: 'active',
                graph: '',
                diagram: ''
            }
        )
    }

    const handleLogins = (e) => {
        getLogins();
        setModalActiveUserId(true);
    }

    const handleNames = (e) => {
        getNames();
        setModalActiveExerciseId(true);
    }

    const getLogins = async () => {
        const response = await fetch("https://localhost:5001/api/User/GetLogins", {
            method: "Get"
        })
        let result = response.json()
        result.then((res) => {
            setLogins(res);
        });
    }

    const getNames = async () => {
        const response = await fetch("https://localhost:5001/api/Exercize/GetExercizeNames", {
            method: "Get"
        })
        let result = response.json()
        result.then((res) => {
            setNames(res);
        });
    }

    return (
        <>
            {auth.isAdmin ? <AdminHeader/> : <UserHeader />}
            {auth.id ?
                <div className="statistic">
                    <div className="container">
                        <div className="statistic__view-wrapper">
                            <div className={`statistic__view ${classFilter.table}`} id="table" onClick={e => {
                                handlerClick(e.target);
                                setChosenStatistic(<Table/>)
                                }}>Таблица
                            </div>
                            <div className={`statistic__view ${classFilter.graph}`} id="graph" onClick={e => {
                                handlerClick(e.target);
                                setChosenStatistic(<Graph/>);
                                }}>График
                            </div>
                            <div className={`statistic__view ${classFilter.diagram}`} id="diagram" onClick={e => {
                                handlerClick(e.target);
                                setChosenStatistic(<Diagramm/>);
                                }}>Диаграмма
                            </div>
                        </div>

                        <div className="statistic__wrapper">
                            {chosenStatistic}
                        </div>
                    </div>
                </div>

            :

            <div className="statistic">
                <div className="container">
                    <div className="statistic__view-wrapper">
                        <div className={`statistic__view ${classFilter.table}`} id="table" onClick={e => {
                            handlerClick(e.target);
                            setChosenStatistic(<Table userId={userId} exerciseId={exerciseId}/>);
                            }}>Таблица
                        </div>
                        <div className={`statistic__view ${classFilter.graph}`} id="graph" onClick={e => {
                            handlerClick(e.target);
                            setChosenStatistic(<Graph userId={userId} exerciseId={exerciseId}/>);
                            }}>График
                        </div>
                        <div className={`statistic__view ${classFilter.diagram}`} id="diagram" onClick={e => {
                            handlerClick(e.target);
                            setChosenStatistic(<Diagramm userId={userId} exerciseId={exerciseId}/>);
                            }}>Диаграмма
                        </div>
                    </div>

                        <div className="statistic__view-wrapper">
                            <div className="statistic__view" onClick={handleLogins}>
                            Выбрать пользователя
                        </div>

                            <div className="statistic__view" onClick={handleNames}>
                            Выбрать упражнение
                        </div>
                    </div> 
                        
                    <div className="statistic__wrapper">
                        {!userId && !exerciseId ? <p className="statistic__base-text">Для просмотра статистики необходимо ввести либо Id пользователя, либо Id упражнения</p> : chosenStatistic}
                    </div>           
                </div>
            </div>
            }
            
            <Modal active={modalActiveUserId} setActive={setModalActiveUserId} text={[]}>
                <form>
                    <label>
                        Выберите пользователя для поиска :
                        <CheckBoxes allOptions={logins} setSelected={setSelectedLogins} />
                    </label>
                    
                    <button className="modal__button" onClick={handleClickUserModal}>Посмотреть статистику</button>
                </form>
            </Modal>

            <Modal active={modalActiveExerciseId} setActive={setModalActiveExerciseId} text={[]}>
                <form>
                    <label>
                        Выберите упражнение для поиска :
                        <CheckBoxes allOptions={names} setSelected={setSelectedNames} />
                    </label>

                    <button className="modal__button" onClick={handleClickExerciseModal}>Посмотреть статистику</button>
                </form>
            </Modal>
        </>       
    );
}
 
export default Statistic;