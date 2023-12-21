import UserHeader from "../Headers/UserHeader";
import { useState } from "react";
import Table from "./Table/Table";


import "./style.scss";
import Diagramm from "./Diagramm/Diagramm";
import Graph from "./Graph/Graph";

const Statistic = () => {

    const [chosenStatistic, setChosenStatistic] = useState(<Table/>)
    const [classFilter, setClassFilter] = useState(
        {
            easy: 'active',
            medium: '',
            hard: ''
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
            <UserHeader />
            <div className="statistic">
                <div className="container">
                    <div className="statistic__view-wrapper">
                        <div className={`statistic__view ${classFilter.table}`} id="table" onClick={e => {
                            handlerClick(e.target);
                            setChosenStatistic(<Table />);
                            }}>Таблица</div>
                        <div className={`statistic__view ${classFilter.graph}`} id="graph" onClick={e => {
                            handlerClick(e.target);
                            setChosenStatistic(<Graph/>);
                            }}>График</div>
                        <div className={`statistic__view ${classFilter.diagram}`} id="diagram" onClick={e => {
                            handlerClick(e.target);
                            setChosenStatistic(<Diagramm />);
                            }}>Диаграмма</div>
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