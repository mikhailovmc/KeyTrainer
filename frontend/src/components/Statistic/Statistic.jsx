import UserHeader from "../Headers/UserHeader";
import { useContext, useEffect, useState } from "react";
import Table from "./Table/Table";


import "./style.scss";
import Diagramm from "./Diagramm/Diagramm";
import Graph from "./Graph/Graph";
import AuthContext from "../../context/AuthProvider";
import Modal from "../Modal/Modal";
import AdminHeader from "../Headers/AdminHeader";

const Statistic = () => {
    const {auth} = useContext(AuthContext);
    const [modalActiveUserId, setModalActiveUserId] = useState(false);
    const [modalActiveExerciseId, setModalActiveExerciseId] = useState(false);
    const [userId, setUserId] = useState();
    const [exerciseId, setExerciseId] = useState();
    const [chosenStatistic, setChosenStatistic] = useState(
        auth.id ? <Table userId={userId}/> : ''
    )
    
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
        setModalActiveUserId(false);
        setChosenStatistic(<Table userId={userId} exerciseId={exerciseId}/>);
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
        setChosenStatistic(<Table userId={userId} exerciseId={exerciseId}/>);
        setClassFilter(
            {
                table: 'active',
                graph: '',
                diagram: ''
            }
        )
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
                        <div className="statistic__view"  onClick={e => {setModalActiveUserId(true);}}>
                            Выбрать пользователя
                        </div>

                        <div className="statistic__view" onClick={e => {setModalActiveExerciseId(true)}}>
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
                    <input className="input" type="text" defaultValue={""} placeholder="Введите ID пользователя" onChange={e => {
                        setUserId(e.target.value)
                        setExerciseId(null);
                        }}/>
                    <button className="modal__button" onClick={handleClickUserModal}>Посмотреть статистику</button>
                </form>
            </Modal>

            <Modal active={modalActiveExerciseId} setActive={setModalActiveExerciseId} text={[]}>
                <form>
                    <input className="input" type="text" defaultValue={""} placeholder="Введите ID упражнения" onChange={e => {
                        setExerciseId(e.target.value);
                        setUserId(null);
                        }}/>
                    <button className="modal__button" onClick={handleClickExerciseModal}>Посмотреть статистику</button>
                </form>
            </Modal>
        </>       
    );
}
 
export default Statistic;