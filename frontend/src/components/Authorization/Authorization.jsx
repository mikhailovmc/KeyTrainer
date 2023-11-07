import { useState } from "react";

import UserHeader from "../Headers/UserHeader";
import "./style.scss";
import pic from "./img/eye.png";

import { useDispatch } from "react-redux";

const Authorization = () => {

    const [passwordType, setPasswordType] = useState("password");

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    const [responce, setResponce] = useState();
    const dispatch = useDispatch();

    // const [user, setUser] = useState();  
    
    const user = {
        login: login,
        password: password
    }
    console.log(user);

    




    const checkLogin = () => {
        const responceFromServer = fetch('https://localhost:5001/api/User/Lo', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });
        console.log("Ответ сервера в авторизации", responceFromServer)
        let result = responceFromServer.json();
        console.log(result);
        setResponce(result);
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
            <UserHeader links={[{text: "Инструкция", route: "/instruction"}, {text: "Регистрация", route: "/registration"}]}/>
            <div className="logPage">
                
                <form className="form" action="">
                    <div className="form__title">Авторизация</div>

                    <label className="form__label">
                        Логин:
                        <input className="input" type="text" name="login" placeholder="Логин" onChange={e => setLogin(e.target.value)} required pattern="/^[a-z0-9_-]{3,16}$/"/>
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
                    

                    <button className="button" type="submit" onClick={() => dispatch(login(login, password))}>Войти</button>
                </form>
                
            </div>
        </>
    );
}
 
export default Authorization;