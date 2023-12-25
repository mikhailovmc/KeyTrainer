import UserHeader from "./../../Headers/UserHeader";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import pic1 from "./../../../assets/spravka-auth.jpg"
import pic2 from "./../../../assets/spravka-ok.jpg"
import pic3 from "./../../../assets/difficult.jpg"
import pic4 from "./../../../assets/keyboard.jpg"
import pic5 from "./../../../assets/statistic.jpg"
import "./style.scss";

const SiteInstruction = () => {

    return (
        <>
            <UserHeader/>
            <div id="instruction" className="site-instruction">
                <p className="site-instruction__title">Инструкция по сайту</p>
                <ol className="site-instruction__list">
                    <li>
                        <AnchorLink href="#introduction">
                            Введение
                        </AnchorLink>               
                    </li>

                    <li>
                        <AnchorLink href="#auth">
                            Авторизация, запуск программы
                        </AnchorLink>  
                    </li>

                    <li>
                        <AnchorLink href="#difficult">
                            Выбор сложности
                        </AnchorLink>                        
                    </li>

                    <li>
                        <AnchorLink href="#exercise">
                            Упражнение
                        </AnchorLink> 
                    </li>

                    <li>
                        <AnchorLink href="#passExercise">
                            Прохождение упражнения
                        </AnchorLink> 
                    </li>

                    <li>
                        <AnchorLink href="#statistic">
                            Статистика
                        </AnchorLink>
                    </li>
                </ol>

                <section className="site-instruction__section" id="introduction">
                    <h2>Введение</h2>
                    <p>
                        Клавиатурный тренажер позволяет эффективно обучиться методу слепой
                        печати для пользователей персонального компьютера.
                        Программа использует базу данных PostreSQL. Программная система 
                        совместима с версиями версиями Windows 7 и новее, MacOS версии Lion и новее. 
                        Системные требования: 50 Mb оперативной памяти, 5 Mb жесткого диска
                    </p>
                </section>

                <section className="site-instruction__section" id="auth">
                    <h2>Авторизация, запуск программы</h2>
                    <p>
                        Данное веб-приложение состоит из двух частей: использование сайта для пользователя 
                        и администратора. При запуске программной системы появляется страница авторизации, 
                        представленное на рисунке. 
                    </p>
                    <img src={pic1} alt="Авторизация" />
                    <p>
                        В поля "Логин" и "Пароль" необходимо ввести данные
                        зарегистрированного пользователя или администратора и нажать кнопку "Войти". 
                        Если данные введены верно, то система выдаст сообщение с приветствием и логином 
                        пользователя. После нажатия кнопки "Ок" система определяет права пользователя и 
                        переходит для работы на соответствующую страницу сайта.
                    </p>
                    <img src={pic2} alt="Вход" />    
                </section>

                <section className="site-instruction__section" id="difficult">
                    <h2>Выбор сложности</h2>
                    <p>
                        После успешной авторизации пользователь попадает на страницу с выбором 
                        упражнения. С самого начала выбран легкий уровень сложности упражнения. 
                        При нажатии на один из уровней сложности будет произведено изменения 
                        списка с упражнениями в соответствии с выбранной сложностью. После выбора 
                        уровня сложности, пользователь выбирает с помощью клика карточку с упражнением. 
                        После выбора происходит переход на страницу с выполнение выбранного упражнения.
                    </p>
                    <img src={pic3} alt="Выбор сложности" />
                </section>

                <section className="site-instruction__section" id="exercise">
                    <h2>Упражнение</h2>
                    <p>
                        Упражнения состоит из нескольких частей. Непосредственно самого текста 
                        для выполнения, количества максимально допустимых ошибок, времени на 
                        выполнение упражнения. В зависимости от увеличения сложности все эти 
                        значения уменьшаются.
                    </p>
                </section>

                <section className="site-instruction__section" id="passExercise">
                    <h2>Прохождение упражнения</h2>
                    <p>
                        Для прохождения упражнения необходимо в поле вводить необходимый символ. 
                        Необходимый символ выделяется желтым цветом. Если был нажат не тот символ, 
                        то увеличивается количество ошибок. Напечатанный текс выделяется серым цветом. 
                        Выполнение упражнения может закончится либо успешно либо нет. Если в ходе был 
                        написан весь текст, за доступное время и не было превышено количество ошибок, 
                        то упражнения завершается успешно и пользователю выводится информацию о 
                        прохождении упражнения. Если в ходе прохождения упражнения количество ошибок 
                        больше допустимого количества, или время кончилось, то выполнения упражнения 
                        прекращается.
                    </p>
                    <img src={pic4} alt="Прохождение упражнения" />
                </section>
                
                <section className="site-instruction__section" id="statistic">
                    <h2>Статистика</h2>
                    <p>
                        Администратор для просмотра статистики может в шапке сайта нажать соответствующую кнопку для перехода на страницу статистики.
                        На этой странице администратор выбирает пользователя по нажатию на кнопку "Введите Id пользователя". Для удобства можно выбрать 
                        различные форматы отображения данных (Таблица, График, Диаграмма). Тоже самое администратор может сделать и с упражнением. 
                        При вводе ID упражнения будет выведена статистика по этому упражнению
                    </p>
                    <img src={pic5} alt="Прохождение упражнения" />
                </section>
            </div>

            <AnchorLink className="arrow__anchor-wrapper"  href="#instruction">
                <div className="arrow__anchor"></div>
            </AnchorLink> 
        </>
    );
}
 
export default SiteInstruction;
