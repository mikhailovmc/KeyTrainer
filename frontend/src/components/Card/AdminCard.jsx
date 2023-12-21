import "./style.scss"

import { Link } from "react-router-dom";

const AdminCard = ({exercises}) => {

    const showExercises = () => {
        return exercises.map(exercise => {
            exercise.text = exercise.text.replace(/\s/g, "");
            return (
                <Link to={`/changeLevel/${exercise.id}`} key={exercise.id} className="card">
                    <div className="card__top">№ {exercise.id}</div>
                    <div className="card__body">
                        <span className="card__text">Длина: {exercise.text.length} символов</span>
                        <span className="card__text">Макс. ошибок: {exercise.countOfErrors}</span>
                        <span className="card__text">Время на выполнение: {exercise.maxTime} секунд</span>
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