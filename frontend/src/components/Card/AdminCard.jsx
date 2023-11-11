import "./style.scss"
import pic from "./img/Ellipse.svg"
import { Link } from "react-router-dom";

const AdminCard = ({exercises}) => {
    console.log("Вывод упражнений в card", exercises);

    const showExercises = () => {
        return exercises.map(exercise => {
            return (
                <Link to={`/create/${exercise.id}`} key={exercise.id} className="card">
                    <div className="card__top">№ {exercise.id}</div>
                    <div className="card__body">
                        <span className="card__text">Длина: {exercise.length} символов</span>
                        <span className="card__text">Макс. ошибок: {exercise.erorrs}</span>
                        <span className="card__text">Время на выполнение: {exercise.time}</span>
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