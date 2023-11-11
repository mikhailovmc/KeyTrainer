import Keyboard from "./Keyboard/Keyboard";
import InputField from "./InputField/InputField";
import Results from "../KeyboardPage/Results/Results";
import UserHeader from "../Headers/UserHeader";
import PracticeText from "../KeyboardPage/PracticeText/PracticeText";

const KeyboardPage = () => {

    return (
        <>
            <UserHeader />
            <div className="container">
                <Results/>
                <PracticeText/>
                <InputField/>
                <Keyboard/>  
            </div>
        </>
    );
}
 
export default KeyboardPage;