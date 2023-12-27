import UserHeader from "./../../Headers/UserHeader"
import "./style.scss"
const Creators = () => {
    return (
        <>
            <UserHeader/> 
            <div className="creators">
                <p className="creators__title">Информация о разработчиках</p>
                <p className="">Самарский университет</p>
                <p className="creators__subtitle">Кафедра программных систем</p>
                <p className="creators__subtitle">Курсовой проект: "Клавиатурный тренажер "KeyGym""</p>
                <p className="creators__text">Разработчики (обучающиеся группы 6415-020302D):</p>
                <p className="creators__text">Прокопов В.А.</p>
                <p className="creators__text">Михайлов М.С.</p>
                <p className="creators__text">Едавкин С.И.</p>
                <p className="creators__director">Руководитель: Зеленко Л.С.</p>
            </div>

            <span className="data">Самара 2023</span>
        </>
        
    );
}
 
export default Creators;