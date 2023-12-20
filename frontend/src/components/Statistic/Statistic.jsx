import UserHeader from "../Headers/UserHeader";
import AuthContext from "../../context/AuthProvider";
import { useContext, useState } from "react";
import useFetch from "../../useFetch/useFetch";
import { getStatisticsByUserId } from "../../helpers/links";
import "./style.scss";
import Table from "./Table/Table";


const Statistic = () => {

    const { auth } = useContext(AuthContext);

    const {data, isLoading, error} = useFetch(getStatisticsByUserId + auth.id);

    const handleClick = (id) => {
        if (id = )
    }

    return (
        <>
        <UserHeader />
        <div className="statictic__level">
            <div className={`exercise__difficult`} id="table" onClick={e => {handleClick(e.target.id)}}>Легкий уровень</div>
            <div className={`exercise__difficult`} id="Graph" onClick={e => {handleClick(e.target.id)}}>График</div>
            <div className={`exercise__difficult`} id="diagramm" onClick={e => {handleClick(e.target.id)}}>Диаграмма</div>
        </div>
        <div className="statictic__wrapper">
            { 
                handleClick()
            }
            
        </div>
        </>
        
    );
}
 
export default Statistic;