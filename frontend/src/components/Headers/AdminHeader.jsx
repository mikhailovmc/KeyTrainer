import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import Dropdown from "./Dropdown/Dropdown";
import { dropDownLinks, dropDownLinksAdmin } from "./links";
import "./style.scss"

const AdminHeader = () => {
    const { setAuthData } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        setAuthData(null);
        navigate("/");
    }
    return (
        <header>
            <div className="logo">KeyGym</div>
            <nav>
                <ul className="header__list">
                    <li className="header__list-item">
                        <Dropdown title={'Упражнение'} links={dropDownLinksAdmin}/>
                    </li>
                    
                    <li className="header__list-item">
                        <Dropdown title={"Справка"} links={dropDownLinks}/>
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