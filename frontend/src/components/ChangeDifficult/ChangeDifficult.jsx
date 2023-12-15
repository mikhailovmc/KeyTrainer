import { useState } from "react";
import AdminHeader from "../Headers/AdminHeader";
import ChangeDifficultForm from "./ChangeDifficultForm";
import useFetch from "./../../useFetch/useFetch"
import { getDifficultyLevel } from "../../helpers/links";
import "./style.scss"

const ChangeDifficult = () => {

    const {data: easy, isLoading1, error1} = useFetch(getDifficultyLevel + 1);
    const {data: middle, isLoading2, error2} = useFetch(getDifficultyLevel + 2);
    const {data: hard, isLoading3, error3} = useFetch(getDifficultyLevel + 3);

    
    return ( 
        <>
            <AdminHeader/>
            {!isLoading3 ? 
                <div className="changeDifficult">
                    {easy && middle && hard && <ChangeDifficultForm easy={easy} middle={middle} hard={hard}/>}
                </div>
                :
                <p>Загрузка данных</p>
            }
        </>
    );
}
 
export default ChangeDifficult;