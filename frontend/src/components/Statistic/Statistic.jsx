import UserHeader from "../Headers/UserHeader";
import { useContext, useEffect, useState } from "react";
import Table from "./Table/Table";
import "./style.scss";
import Diagramm from "./Diagramm/Diagramm";
import Graph from "./Graph/Graph";
import AuthContext from "../../context/AuthProvider";
import AdminHeader from "../Headers/AdminHeader";


const Statistic = () => {
    const {auth} = useContext(AuthContext);

    const [chosenStatistic, setChosenStatistic] = useState(<Table userId={auth.id}/>)

    const [classFilter, setClassFilter] = useState( 
        {
            table: 'active',
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

    return (
        <>
            {auth.isAdmin ? <AdminHeader/> : <UserHeader />}
                <div className="statistic">
                    <div className="container">
                        <div className="statistic__view-wrapper">
                            <div className={`statistic__view ${classFilter.table}`} id="table" onClick={e => {
                                handlerClick(e.target);
                                setChosenStatistic(<Table userId={auth.id}/>)
                                }}>Таблица
                            </div>
                            <div className={`statistic__view ${classFilter.graph}`} id="graph" onClick={e => {
                                handlerClick(e.target);
                                setChosenStatistic(<Graph userId={auth.id}/>);
                                }}>График
                            </div>
                            <div className={`statistic__view ${classFilter.diagram}`} id="diagram" onClick={e => {
                                handlerClick(e.target);
                                setChosenStatistic(<Diagramm userId={auth.id}/>);
                                }}>Диаграмма
                            </div>
                        </div>

                        <div className="statistic__wrapper">
                            {chosenStatistic}
                        </div>
                    </div>
                </div>        
        </>       
    );
}
 
export default Statistic;