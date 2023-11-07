import { Link } from "react-router-dom";

import "./style.scss"

const AdminHeader = () => {
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
                                    Редактировать сложность
                                </Link>

                                <Link to="/exercise">
                                    Все упражнения
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
                        <Link to="/information">
                            Справка
                        </Link>
                    </li>

                    <li className="header__list-item">
                        Администратор
                    </li>

                    <li className="header__list-item">
                        Выйти
                    </li>
                </ul>
            </nav>
        </header>
    );
}
 
export default AdminHeader;