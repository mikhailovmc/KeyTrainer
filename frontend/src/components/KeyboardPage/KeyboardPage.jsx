import { Link, useParams } from "react-router-dom";
import useFetch from "../../useFetch/useFetch";
import Keyboard from "./Keyboard/Keyboard";
import InputField from "./InputField/InputField";
import Results from "../KeyboardPage/Results/Results";
import UserHeader from "../Headers/UserHeader";
import PracticeText from "../KeyboardPage/PracticeText/PracticeText";
import { useContext, useEffect, useState } from "react";
import { addStatistic, getExercisesById } from "../../helpers/links";
import Modal from "../Modal/Modal";
import AuthContext from "../../context/AuthProvider";

const KeyboardPage = ({data, id}) => {
    const { auth } = useContext(AuthContext);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [errorCount, setErrorCount] = useState(0);
    const [startTime, setStartTime] = useState(true);
    const [timeLeft, setTimeLeft] = useState(data.maxTime);
    const [finished, setFinished] = useState(false);
    const [badModal, setBadModal] = useState(false);
    
    const [countLength, setCountLength] = useState(0);
    let finishProgram = false;
    let status = "Пройдено";
    // const [status, setStatus] = useState("");
    const [letters, setLetters] = useState([]);
	const [specs, setSpecs] = useState([]);
    const [currentInputValue, setCurrentInputValue] = useState("");

    let userStatistic = new FormData();

    const collectCollection = (letters, specs) => {
        setLetters(letters);
        setSpecs(specs)
    }

    const sendStatisticOnServer  = async () => {
        if (finishProgram) {
            userStatistic.append("length", countLength + 1);
        } else {
            userStatistic.append("length", countLength);
        } 
        
        userStatistic.append("countOFErrors", errorCount + 1);        
        userStatistic.append("status", status);
        userStatistic.append("time", data.maxTime - timeLeft);
        userStatistic.append("idExercize", id);
        userStatistic.append("idUser", auth.id);
        
        try {
            const responceFromServer = await fetch(addStatistic, {
                method: 'POST',
                body: userStatistic
            });

            if(responceFromServer.ok) {

            }
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        if (startTime) {
          const interval = setInterval(() => {
            
            setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 0);
            if (timeLeft === 0) {
                status = "Не пройдено";
                setBadModal(true);
                sendStatisticOnServer();
                setStartTime(false);
            } 
          }, 1000);
    
          return () => clearInterval(interval);
        }
      }, [startTime, timeLeft]);

    function press (letter) {

        if(letter === data.text[currentIndex]) {
            setCountLength(prev => ++prev)
            setCurrentInputValue((prev) => prev + letter);
            setCurrentIndex((prev) => prev + 1);

            if (currentIndex === data.text.length - 1) {
                finishProgram = true;
                status = "Пройдено";
                setFinished(true);
                sendStatisticOnServer();
                setStartTime(false)
            }

        } else {
            setErrorCount((prev) => prev + 1)
            if (errorCount + 1 === data.countOfErrors) {
                status = "Не пройдено";
                console.log(status);
                // clearInterval(timeLeft)
                setStartTime(false)
                setBadModal(true);
                sendStatisticOnServer();
            }
        }
    }

    return (
        <>
            <UserHeader />
            <div className="container">
                <Results 
                    maxErrors={data.countOfErrors} 
                    maxTime={data.maxTime} 
                    errorCount={errorCount} 
                    timeLeft={timeLeft} 
                    length={data.length}
                    remainLength={countLength}
                    />
                <PracticeText text={data.text} currentIndex={currentIndex}/>
                <InputField
                    press={press}
                    letters={letters} 
                    specs={specs}
                    currentInputValue={currentInputValue} 
                />
                <Keyboard collectCollection={collectCollection}/>  
            </div>

            {finished ? 
                <Modal active={finished} setActive={setFinished} text={[]}>
                    <p className="modal__title">Упражнение завершено!</p>
                    <p className="modal__text">Результаты:</p>
                    <p className="modal__text">Ошибок: {errorCount} / {data.countOfErrors} </p>
                    <p className="modal__text">Написано символов: {countLength} / {data.length} </p>
                    <p className="modal__text">Времени осталось: {timeLeft} / {data.maxTime} </p>
                    <Link className="button" to={"/exercise"}>Перейти на страницу с упражненими</Link>
                </Modal> :
                <></>
                // <Modal active={modalActive} setActive={setFinished} text={[]}>
                //     <p className="modal__title">Упражнение завершено!</p>
                //     <p className="modal__text">Результаты прохождения...</p>
                // </Modal>
            }
            <Modal active={badModal} setActive={setBadModal} text={[]}>
                <p className="modal__title">Упражнение прервано!</p>
                <p className="modal__text">Возможно вы превысили допустимое количество времени, либо превысили допустимое количество ошибок</p>
                <p className="modal__text">Результаты:</p>
                    <p className="modal__text">Ошибок: {errorCount} / {data.countOfErrors} </p>
                    <p className="modal__text">Написано символов: {countLength} / {data.length} </p>
                    <p className="modal__text">Времени осталось: {timeLeft} / {data.maxTime} </p>

                <Link className="modal__button" to={"/exercise"}>Перейти на страницу с упражненими</Link>
                {/* <Link className="button" to={`/keyboard/${id}`}>Повторить упражнение</Link> */}
            </Modal>
        </>
    );
}
 
export default KeyboardPage;