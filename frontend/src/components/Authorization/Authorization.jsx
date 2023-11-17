import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserHeader from "../Headers/UserHeader";
import AuthContext from "../../context/AuthProvider";
import "./style.scss";
import pic from "./img/eye.png";

const Authorization = () => {

    const navigate = useNavigate();
    const { setAuthData } = useContext(AuthContext);
    const [passwordType, setPasswordType] = useState("password");
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    let userData = new FormData();

    const checkLogin = async (event) => {
        event.preventDefault();

        userData.append('login', login);
        userData.append('password', password);

        const responceFromServer = await fetch('https://localhost:5001/api/User/Login', {
            method: "POST",
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            // },
            body: userData
        });
        console.log("Ответ сервера в авторизации", responceFromServer)

        if(responceFromServer.ok) {
            let result = await responceFromServer.json()
            result.id === null ? setAuthData(login, "admin") : setAuthData(login, "user");
            navigate("/exercise");
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
            <UserHeader links={[{text: "Инструкция", route: "/instruction"}, {text: "Регистрация", route: "/registration"}]}/>
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
        </>
    );
}
 
export default Authorization;