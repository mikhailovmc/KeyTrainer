import { useState } from "react";
import axios from "axios";

import Header from "../Headers/Header";
import "./style.scss";
import pic from "./img/eye.png";


const Registration = () => {

    const [passwordType, setPasswordType] = useState("password");
    // const [passwordInput, setPasswordInput] = useState("");
    
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

     const  registration = async (event) => {
        event.preventDefault();
        const userData = {
                login,
                password
            }
        console.log(userData)


        try {
            const responce = await axios.post('https://localhost:5001/api/User/Registrations', {
            login,
            password
            })
            console.log(responce)
        } catch (error) {
            alert(error)
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
            <Header links={[{text: "Инструкция", route: "/instruction"}, {text: "Авторизироваться", route: "/login"}]}/>
            <div className="logPage">
                
                <form className="form" action="">
                    <div className="form__title">Зарегистрироваться</div>

                    <label className="form__label">
                        Логин:
                        <input className="input" type="text" name="login" placeholder="Логин" onChange={e => {setLogin(e.target.value)}}/>
                    </label>
                    
                    <label className="form__label password__label">
                        Пароль:
                        <input className="input password-input" type={passwordType}  placeholder="Пароль" onChange={e => {setPassword(e.target.value)}}/>
                        <div className={passwordType==="password" ? "password__btn" :" password__btn active"} onClick={togglePassword}><img src={pic} alt="Посмотреть пароль" /></div>
                    </label>

                    <label className="form__label password__label">
                        Повторите пароль:
                        <input className="input password-input" type={passwordType}  placeholder="Подтвердите пароль" />
                        <div 
                            className={passwordType==="password" ? "password__btn" :" password__btn active"} 
                            onClick={togglePassword}>
                                <img src={pic} alt="Посмотреть пароль" /></div>
                    </label>

                    <button className="button" onClick={registration}>Зарегистрироваться</button>
                </form>
                
            </div>
        </>
        
    );
}
 
export default Registration;