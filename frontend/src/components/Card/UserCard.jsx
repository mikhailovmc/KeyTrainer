import "./style.scss"
import pic from "./img/Ellipse.svg"
import { Link } from "react-router-dom";
const UserCard = ({exercises}) => {
    const showExercises = () => {
        return exercises.map(exercise => {
            return (
                <Link to={`/keyboard/${exercise.id}`} key={exercise.id} className="card">
                    <div className="card__top">Длина: {exercise.length} символов</div>
                    <div className="card__body">
                        <img className="card__img" src={pic} alt="круг" />
                        <span className="card__percent">{exercise.lengthPercentage}%</span>
                        <span className="card__number">№{exercise.id}</span>
                    </div>
                    <div className="card__footer">
                        {exercise.status}
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
 
export default UserCard;