import UserHeader from "../Headers/UserHeader";
import AuthContext from "../../context/AuthProvider";
import { useContext, useState } from "react";
import useFetch from "../../useFetch/useFetch";
import { getStatisticsByUserId } from "../../helpers/links";
import "./style.scss";
import Table from "./Table/Table";
import Graph from "./Graph/Graph";


const Statistic = () => {

    const { auth } = useContext(AuthContext);

    const {data, isLoading, error} = useFetch(getStatisticsByUserId + auth.id);

    const handleClick = (id) => {
        if (id === "table") {
            return <Table data={data} />
        }

        if (id === "graph") {
            return <Graph />
        }

        if (id === "diagramm") {
            return <Table data={data} />
        }
        
        return <Table data={data} />
    }

    return (
        <>
            <UserHeader />
            <div className="statistic">
                <div className="container">
                    <div className="statistic__view-wrapper">
                        <div className="statistic__view" id="table" onClick={e => {handleClick(e.target.id)}}>Легкий уровень</div>
                        <div className="statistic__view "id="graph" onClick={e => {handleClick(e.target.id)}}>График</div>
                        <div className="statistic__view" id="diagramm" onClick={e => {handleClick(e.target.id)}}>Диаграмма</div>
                    </div>
                    <div className="statictic__wrapper">
                        { 
                            handleClick()
                        }
                    </div>
                </div>
            </div>
            
        </>       
    );
}
 
export default Statistic;