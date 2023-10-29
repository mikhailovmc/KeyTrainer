
import { Link } from "react-router-dom";


import "./style.scss"


const Header = () => {
    return (
        
        <header>
            
            <div className="logo">KeyGym</div>
            <nav>
                <ul className="header__list">
                    <li className="header__list-item">
                        <Link to={"/instruction"}>
                            Инструкция
                        </Link>
                    </li>
                    <li className="header__list-item">
                        <Link to={"/login"}>
                            Авторизация
                        </Link>
                    </li>
                    <li className="header__list-item">
                        <Link to={"/registration"}>
                            Регистрация
                        </Link>
                        
                    </li>
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;