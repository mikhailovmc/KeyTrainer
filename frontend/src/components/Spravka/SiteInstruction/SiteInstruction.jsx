import { useContext } from "react";
import AuthContext from "../../../context/AuthProvider";
import UserHeader from "./../../Headers/UserHeader";
import AnchorLink from "react-anchor-link-smooth-scroll";
import InstructionSection from "./InstructionSection";
import AdminHeader from "../../Headers/AdminHeader";
import AnchorLinkElement from "../../../ui/AnchorLink/AnchorLinkElement";
import { dataSectionAdmin, dataSectionUser } from "./dataSection";
import "./style.scss";


const anchorLinksUser = [
    {title: "Введение", url: "#introduction"},
    {title: "Авторизация, запуск программы", url: "#auth"},
    {title: "Выбор сложности", url: "#difficult"},
    {title: "Упражнение", url: "#exercise"},
    {title: "Прохождение упражнения", url: "#passExercise"},
    {title: "Статистика", url: "#statistic"},
]

const anchorLinksAdmin = [
    {title: "Введение", url: "#introduction"},
    {title: "Авторизация, запуск программы", url: "#auth"},
    {title: "Выбор сложности", url: "#difficult"},
    {title: "Создания упражнения", url: "#createExercise"},
    {title: "Редактирование упражнения", url: "#changeExercise"},
    {title: "Настройка уровня сложности упражнения", url: "#changeDifficult"},
    {title: "Просмотр статистики", url: "#statistic"}
]

const SiteInstruction = () => {
    const { auth } = useContext(AuthContext);

    return (
        <>
            {auth.isAdmin ? <AdminHeader/> : <UserHeader />}
            <div id="instruction" className="site-instruction">
                <p className="site-instruction__title">Инструкция по сайту</p>
                <ol className="site-instruction__list">
                    {auth.isAdmin ? 
                    <AnchorLinkElement links={anchorLinksAdmin}/> : 
                    <AnchorLinkElement links={anchorLinksUser}/>}
                </ol>
                {auth.isAdmin ? 
                <InstructionSection sectionData={dataSectionAdmin} /> : 
                <InstructionSection sectionData={dataSectionUser} />}
            </div>

            <AnchorLink className="arrow__anchor-wrapper"  href="#instruction">
                <div className="arrow__anchor"></div>
            </AnchorLink> 
        </>
    );
}
 
export default SiteInstruction;
