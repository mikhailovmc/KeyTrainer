import Card from "../Card/Card";
import Header from "../Headers/Header";

import "./style.scss"

const ExercisePage = () => {
    return (
        <>
        <Header links={[{text: "Инструкция", route: "/instruction"}, {text: "Регистрация", route: "/registration"}]}/>
        
        <div className="exercise">
            <p className="exercise__title">Упражнения</p>
            <div className="exercise__wrapper">
                <div className="exercise__level">
                    <div className="exercise__difficult active">Легкий уровень</div>
                    <div className="exercise__difficult ">Средний уровень</div>
                    <div className="exercise__difficult ">Сложный уровень</div>
                </div>
             
                <div className="exercise__container">  
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
            
        </div>
        </>
        
    );
}
 
export default ExercisePage;