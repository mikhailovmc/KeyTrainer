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
                        <Link to="/statistic">
                            Статистика
                        </Link>
                    </li>

                    <li className="header__list-item">
                        {login}
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