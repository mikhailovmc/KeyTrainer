import Keyboard from "./Keyboard/Keyboard"
import InputField from "./InputField/InputField"
import Results from "../Results/Results"
import PracticeText from "../PracticeText/PracticeText";

const Keyboard = () => {
    return (
        <div className="container">
            <Results/>
            <PracticeText/>
            <InputField/>
            <Keyboard/>
        </div>
    );
}
 
export default Keyboard;