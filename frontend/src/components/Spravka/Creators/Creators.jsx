import UserHeader from "./../../Headers/UserHeader"
import "./style.scss"
const Creators = () => {
    return (
        <>
            <UserHeader/> 
            <div className="creators">
                <p className="creators__title">Проект выполнили студенты 4 курса ФИИТ:</p>
                <p className="creators__text">Едавкин Степан</p>
                <p className="creators__text">Михалов Максим</p>
                <p className="creators__text">Прокопов Всеволод</p>
            </div>
        </>
        
    );
}
 
export default Creators;