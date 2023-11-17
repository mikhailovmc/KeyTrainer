import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkLogin, checkPassword } from "./validator";
import axios from "axios";

import UserHeader from "../Headers/UserHeader";
import pic from "./img/eye.png";
import "./style.scss";


const Registration = () => {

    const [passwordType, setPasswordType] = useState("password");
    
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState();
    const navigate = useNavigate();
    
    const  registration = async (event) => {
        event.preventDefault();
        
        let userData = new FormData();

        if(password === repeatPassword) {
            userData.append('login', login)
            userData.append('password', password)
        } else {
            alert("Пароли не совпадают");
        }

        if(checkLogin(login) && checkPassword(password)) {
            try {
                const responceFromServer = await fetch('https://localhost:5001/api/User/Register', {
                method: 'POST',
                // headers: {
                //     'Content-Type': 'multipart/form-data'
                // },
                body: userData
                });
    
                if(responceFromServer.ok) {
                    
                    navigate('/login')
                }
                console.log("Ответ сервера в авторизации", responceFromServer)
    
            } catch (error) {
                alert(error)
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
        </>
        
    );
}
 
export default Registration;