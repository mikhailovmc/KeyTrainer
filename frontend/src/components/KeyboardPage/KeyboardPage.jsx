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

    const [letters, setLetters] = useState([]);
	const [specs, setSpecs] = useState([]);

    const handleLetter = (letter) => {
        setPressedKey(letter)
    }

    const collectCollection = (letters, specs) => {
        setLetters(letters);
        setSpecs(specs)
    }

    return (
        <>
            <UserHeader />
            <div className="container">
                <Results/>
                <PracticeText/>
                {letters && specs && <InputField handleLetter={handleLetter} letters={letters} specs={specs}/>}
                <Keyboard collectCollection={collectCollection}/>  
            </div>
        </>
    );
}
 
export default KeyboardPage;