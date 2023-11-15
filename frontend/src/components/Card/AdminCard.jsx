import "./style.scss"

import { Link } from "react-router-dom";

const AdminCard = ({exercises}) => {
    console.log("Вывод упражнений в card", exercises);

    const showExercises = () => {
        return exercises.map(exercise => {
            return (
                <Link to={`/changeLevel/${exercise.id}`} key={exercise.id} className="card">
                    <div className="card__top">№ {exercise.id}</div>
                    <div className="card__body">
                        <span className="card__text">Длина: {exercise.length} символов</span>
                        <span className="card__text">Макс. ошибок: {exercise.countOfErrors}</span>
                        <span className="card__text">Время на выполнение: {exercise.maxTime}</span>
                    </div>
                    <div className="card__footer">
                        Редактировать
                    </div>
                </Link>
            )
        })
    }
    
    return (
        <>
            {showExercises()}
        </>
        
    )
}
 
export default AdminCard;