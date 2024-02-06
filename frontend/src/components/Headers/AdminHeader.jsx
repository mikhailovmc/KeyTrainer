import { useContext } from "react"
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import Dropdown from "./Dropdown/Dropdown";
import { dropDownLinks } from "./links";
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
                        <Dropdown title={'Упражнение'} links={dropDownLinks[0]}/>
                    </li>
                    
                    <li className="header__list-item">
                        <Dropdown title={"Справка"} links={dropDownLinks[1]}/>
                    </li>
                    
                    <li className="header__list-item">
                        <Link to="/admin-statistic">
                            Статистика
                        </Link>
                    </li>

                    <li className="header__list-item">Администратор</li>
                    <li className="header__list-item cursor" onClick={handleLogOut}>Выйти</li>
                </ul>
            </nav>
        </header>
    );
}
 
export default AdminHeader;