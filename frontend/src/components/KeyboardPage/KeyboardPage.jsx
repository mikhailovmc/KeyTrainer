import { useParams } from "react-router-dom";
import useFetch from "../../useFetch/useFetch";
import Keyboard from "./Keyboard/Keyboard";
import InputField from "./InputField/InputField";
import Results from "../KeyboardPage/Results/Results";
import UserHeader from "../Headers/UserHeader";
import PracticeText from "../KeyboardPage/PracticeText/PracticeText";
import { useState } from "react";

const KeyboardPage = () => {
    const {id} = useParams();

    const {data: application, isLoading, error} = useFetch();

    const [pressedKey, setPressedKey] = useState();

    const handleLetter = (letter) => {
        setPressedKey(letter)
 
    }
    return (
        <>
            <UserHeader />
            <div className="container">
                <Results/>
                <PracticeText/>
                <InputField handleLetter={handleLetter}/>
                <Keyboard pressedKey={pressedKey}/>  
            </div>
        </>
    );
}
 
export default KeyboardPage;