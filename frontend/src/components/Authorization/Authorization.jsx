import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserHeader from "../Headers/UserHeader";
import AuthContext from "../../context/AuthProvider";
import Modal from "./../Modal/Modal";

import "./style.scss";
import pic from "./img/eye.png";

const Authorization = () => {
    
    const navigate = useNavigate();
    const { setAuthData } = useContext(AuthContext);
    const [passwordType, setPasswordType] = useState("password");
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [modalActive, setModalActive] = useState(false);
    const [errorText, setErrorText] = useState();

    let userData = new FormData();

    const navigateToPage = () => {
        navigate("/exercise")
    }

    const checkLogin = async (event) => {
        event.preventDefault();
        setErrorText('')
        userData.append('login', login);
        userData.append('password', password);

        const responceFromServer = await fetch('https://localhost:5001/api/User/Login', {
            method: "POST",
            body: userData
        });

        if(responceFromServer.ok) {
            const result = await responceFromServer.json()
            result.id === null ? setAuthData(login, "admin", result.id) : setAuthData(login, "user", result.id);
            setModalActive(true);
            setTimeout(navigateToPage, 2000); 
        }

        if(!responceFromServer.ok) {
            const result = await responceFromServer.json();
            setErrorText(result);
            setModalActive(true);
        }
        
    }

    const togglePassword =()=>{
      if(passwordType==="password") {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }

    return (
        <>
            <UserHeader/>
            <div className="logPage">
                
                <form className="form" action="">
                    <div className="form__title">Авторизация</div>

                    <label className="form__label">
                        Логин:
                        <input className="input" type="text" name="login" placeholder="Логин" onChange={e => setLogin(e.target.value)} required />
                    </label>
                    
                    <label className="form__label password__label">
                        Пароль:
                        <input className="input password-input" type={passwordType}  placeholder="Пароль" onChange={e => setPassword(e.target.value)} required/>
                        <div className={passwordType==="password" ? "password__btn" :" password__btn active"} onClick={togglePassword}><img src={pic} alt="Посмотреть пароль" /></div>
                    </label>

                    <label className="form__checkbox"> 
                        <input className="checkbox" type="checkbox" placeholder="Запомнить меня"/>
                        Запомнить меня
                    </label>
                    

                    <button className="button" type="submit" onClick={checkLogin}>Войти</button>
                </form>
                
            </div>

            {errorText ? 
                <Modal active={modalActive} setActive={setModalActive} text={errorText}>
                    <p className="modal__title">Ошибка!</p>
                </Modal> :
                <Modal active={modalActive} setActive={setModalActive} text={[]}>
                    <p className="modal__title">Добро пожаловать, {login}</p>
                </Modal>
            }
        </>
    );
}
 
export default Authorization;