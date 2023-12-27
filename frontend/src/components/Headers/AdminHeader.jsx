import { useContext } from "react"
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import "./style.scss"

const AdminHeader = () => {

    const { setAuthData } = useContext(AuthContext);

    const handleLogOut = () => {
        setAuthData(null)
    }
    return (
        <header>
            <div className="logo">KeyGym</div>
            <nav>
                <ul className="header__list">
                    <li className="header__list-item">
                        <div className="dropdown">
                            <span className="dropbtn">Упражнение</span>
                            <div className="dropdown-content">
                                <Link to="/create">
                                    Создать упражнение
                                </Link>
                                
                                <Link to="/difficult">
                                    Редактировать уровень сложность
                                </Link>

                                <Link to="/exercise">
                                    Все упражнения
                                </Link>
                            </div>
                        </div>    
                    </li>
                    
                    <li className="header__list-item">
                        <div className="dropdown">
                            <span className="dropbtn">Справка</span>
                            <div className="dropdown-content">
                                <Link to="/site-instruction/admin">
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
                    </li>
                    
                    <li className="header__list-item">
                        <Link to="/admin-statistic">
                            Статистика
                        </Link>
                    </li>

                    <li className="header__list-item">
                        Администратор
                    </li>

                    <li className="header__list-item cursor" onClick={handleLogOut}>
                        Выйти
                    </li>
                </ul>
            </nav>
        </header>
    );
}
 
export default AdminHeader;