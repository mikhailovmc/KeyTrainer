import { useState } from "react";
import AdminHeader from "../Headers/AdminHeader";
import ChangeDifficultForm from "./ChangeDifficultForm";

import "./style.scss"
import useFetch from "./../../useFetch/useFetch"
import { getDifficultyLevel } from "../../helpers/links";

const ChangeDifficult = () => {

    const {data: easy, isLoading1, error1} = useFetch(getDifficultyLevel + 1);
    const {data2: medium, isLoading2, error2} = useFetch(getDifficultyLevel + 2);
    const {data3: difficult, isLoading3, error3} = useFetch(getDifficultyLevel + 3);

    let exercise = [easy, medium, difficult];

    return ( 
        <>
            <AdminHeader/>

            <div className="changeDifficult">
                {easy && medium && difficult && <ChangeDifficultForm exercise={exercise} />}
            </div>
        </>
        
        
    );
}
 
export default ChangeDifficult;