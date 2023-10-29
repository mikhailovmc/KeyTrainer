import { useState } from "react";

import Header from "../Headers/Header";
import "./style.scss";
import pic from "./img/eye.png";

const Authorization = () => {

    const [passwordType, setPasswordType] = useState("password");
    // const [passwordInput, setPasswordInput] = useState("");
    
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
            <Header/>
            <div className="logPage">
                
                <form className="form" action="">
                    <div className="form__title">Авторизация</div>

                    <label className="form__label">
                        Логин:
                        <input className="input" type="text" name="login" placeholder="Логин"/>
                    </label>
                    
                    <label className="form__label password__label">
                        Пароль:
                        <input className="input password-input" type={passwordType}  placeholder="Пароль"/>
                        <div className={passwordType==="password" ? "password__btn" :" password__btn active"} onClick={togglePassword}><img src={pic} alt="Посмотреть пароль" /></div>
                    </label>

                    <label className="form__checkbox"> 
                        <input className="checkbox" type="checkbox" placeholder="Запомнить меня"/>
                        Запомнить меня
                    </label>
                    

                    <button className="button" type="submit">Зарегистрироваться</button>
                </form>
                
            </div>
        </>
    );
}
 
export default Authorization;