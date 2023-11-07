import "./style.scss"
import pic from "./img/Ellipse.svg"
import { Link } from "react-router-dom";
const Card = ({exercises}) => {

    console.log("Вывод упражнений в card", exercises);

    const showExercises = () => {
        return exercises.map(exercise => {
            console.log(exercise, "Вывод одного упражнения")
            return (
                <Link to={`/create/${exercise.id}`} key={exercise.id} className="card">
                    <div className="card__top">Длина: {exercise.length} символов</div>
                    <div className="card__body">
                        <img className="card__img"src={pic} alt="" />
                        <span className="card__percent">{exercise.percent}%</span>
                        <span className="card__number">№{exercise.id}</span>
                    </div>
                    <div className="card__footer">
                        Наилучшее время: {exercise.bestTime}
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
 
export default Card;