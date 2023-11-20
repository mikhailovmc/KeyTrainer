import UserHeader from "./../../Headers/UserHeader";

import "./style.scss";

const SiteInstruction = () => {
    return (
        <>
            <UserHeader/>
            <div className="site-instruction">
                <p className="site-instruction__title">Инструкция по сайту</p>
                <ol className="site-instruction__list">
                    <li>Авторизируйтесь в системе;</li>
                    <li>Нажмите в шапке странице на кнопку "Все упражнения";</li>
                    <li>Выберите уровень сложности;</li>
                    <li>Выберите карточку упражнения;</li>
                    <li>Выполняйте упражнение.</li>
                </ol>
            </div>
        </>
    );
}
 
export default SiteInstruction;
