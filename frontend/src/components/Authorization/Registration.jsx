import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./../Modal/Modal";

import UserHeader from "../Headers/UserHeader";
import pic from "./img/eye.png";
import "./style.scss";


const Registration = () => {

    const [passwordType, setPasswordType] = useState("password");
    
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState();
    const [modalActive, setModalActive] = useState(false);
    const [validatorModalActive, setValidatorModalActive] = useState(false);
    const [errorText, setErrorText] = useState()
    const navigate = useNavigate();

    let flag = false;
    
    const navigateToPage = () => {
        navigate("/login")
    }

    const registration = async (event) => {
        event.preventDefault();
        
        let userData = new FormData();

        if(password === repeatPassword) {
            userData.append('login', login)
            userData.append('password', password);
            flag = true;
        } else {
            flag = false;
            setValidatorModalActive(true);
        }
        
        if(flag) {
            try {
                setErrorText("")
                const responceFromServer = await fetch('https://localhost:5001/api/User/Register', {
                method: 'POST',
                body: userData
                });
    
                if(responceFromServer.ok) {
                    setModalActive(true)
                    setTimeout(navigateToPage, 2000)
                }
    
                if(!responceFromServer.ok) {
                    const result = await responceFromServer.json();
                    setErrorText(result);
                    setModalActive(true);
                }
            } catch (error) {
                setErrorText(error)
            }
        }
        

    }

    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }

    return (
        <>
            <UserHeader links={[{text: "Инструкция", route: "/instruction"}, {text: "Авторизироваться", route: "/login"}]}/>
            <div className="logPage">
                
                <form className="form" id="formElem" onSubmit={registration}>
                    <div className="form__title">Зарегистрироваться</div>

                    <label className="form__label">
                        Логин:
                        <input className="input" type="text" name="login" placeholder="Логин" onChange={e => {setLogin(e.target.value)}}/>
                    </label>
                    
                    <label className="form__label password__label">
                        Пароль:
                        <input className="input password-input" type={passwordType} name="password" placeholder="Пароль" onChange={e => {setPassword(e.target.value)}}/>
                        <div className={passwordType==="password" ? "password__btn" :" password__btn active"} onClick={togglePassword}><img src={pic} alt="Посмотреть пароль" /></div>
                    </label>

                    <label className="form__label password__label">
                        Повторите пароль:
                        <input className="input password-input" type={passwordType}  placeholder="Подтвердите пароль" onChange={e => {setRepeatPassword(e.target.value)}}/>
                        <div 
                            className={passwordType==="password" ? "password__btn" :" password__btn active"} 
                            onClick={togglePassword}>
                                <img src={pic} alt="Посмотреть пароль" /></div>
                    </label>

                    <button className="button" type="submit" onSubmit={registration}>Зарегистрироваться</button>
                </form>
                
            </div>
            {errorText ? 
                <Modal active={modalActive} setActive={setModalActive} text={errorText}>
                    <p className="modal__title">Ошибка!</p>
                </Modal> :
                <Modal active={modalActive} setActive={setModalActive} text={[]}>
                    <p className="modal__title">Успешная регистрация!</p>
                </Modal>
            }

            <Modal active={validatorModalActive} setActive={setValidatorModalActive} text={[]}>
                <p className="modal__title">Ошибка!</p>
                <p>Пароли не совпадают</p>
            </Modal>
        </>
        
    );
}
 
export default Registration;