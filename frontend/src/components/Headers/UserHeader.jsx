import { useContext } from "react"
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";

import "./style.scss"


const Header = ({ login }) => {

    const { setAuthData, auth } = useContext(AuthContext);

    const handleLogOut = () => {
        setAuthData(null);
    }


    return ( 
        <>
            {
            (auth.data !== null) ? 
            <header>
            <div className="logo">KeyGym</div>
            <nav>
                <ul className="header__list">
                    <li className="header__list-item">
                        <Link to="/exercise">
                            Все упражнения
                        </Link>
                    </li>

                    <li className="header__list-item">
                        <Link to="/user-statistic">
                            Статистика
                        </Link>
                    </li>

                    <div className="dropdown">
                        <span className="dropbtn">Справка</span>
                        <div className="dropdown-content">
                            <Link to="/site-instruction">
                                Инструкция по сайту
                            </Link>
                                
                            <Link to="/instruction">
                                Правила выполнения упражнения
                            </Link>

                            <Link to="/creators">
                                Разработчики
                            </Link>
                        </div>
                    </div>

                    <li className="header__list-item">
                        {auth.data}
                    </li>

                    <li className="header__list-item cursor" onClick={handleLogOut}>
                        Выйти
                    </li>
                </ul>
            </nav>
            </header> 
            :
            <header>
            <div className="logo">KeyGym</div>
            <nav>
                <ul className="header__list">
                    <li className="header__list-item">
                        <Link to="/registration">
                           Регистрация
                        </Link>
                    </li>

                    <li className="header__list-item">
                        <Link to="/login">
                            Авторизация
                        </Link>
                    </li>
                </ul>
            </nav>
            </header>
        }
        </>
        
    );
}
 
export default Header;