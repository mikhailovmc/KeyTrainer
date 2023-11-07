import { Link } from "react-router-dom";

import UserHeader from "../Headers/UserHeader";
import "./style.scss"

const HiPage = () => {
    return (
        <>
            <UserHeader links={[{text: "Инструкция", route: "/instruction"}, {text: "Авторизация", route: "/login"}]}/>
            <div className="hello-page">
                <h1 className="hello-page__title">Добро пожаловать на нашу тренировку в KeyGym-online</h1>
                <p className="hello-page__text">
                    Мечтаете научиться слепому методу печати и увеличить свою продуктивность на работе или учебе? 
                    Научитесь с нашим бесплатным тренажером.
                </p>
                <div className="hello-page__button">
                    <Link to="/login">
                        Выбрать уровень сложности
                    </Link>
                </div>
            </div>
        </>
        
    );
}
 
export default HiPage;