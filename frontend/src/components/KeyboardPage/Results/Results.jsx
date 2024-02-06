import "./style.scss";
import errorPic from "./../../../assets/icons/error-mark.png";
import timerPic from "./../../../assets/icons/timer.png";
import lengthPic from "./../../../assets/icons/length.png";

const Results = ({maxErrors, maxTime, errorCount, timeLeft, length, remainLength}) => {
    return (
        <div className="results ">
			<p className="results-title">Результаты:</p>
			<div className="indicators">
				
				<div className="indicator">
					<div className="indicator__icon">
						<img src={lengthPic} alt={"Икона длины"}/>
					</div>
					<div className="indicator__name">Длина: {remainLength} / {length}</div>
				</div>

				<div className="indicator">
					<div className="indicator__icon indicator__icon--errors">
						<img src={errorPic} alt={"Икона ошибок"}/>
					</div>
					<div className="indicator__name">Ошибок: {errorCount} / {maxErrors}</div>
				</div>

				<div className="indicator">
					<div className="indicator__icon indicator__icon--errors">
						<img src={timerPic} alt={"Икона таймера"}/>
					</div>
					<div className="indicator__name">Время: {timeLeft} / {maxTime} cек</div>
				</div>
			</div>
		</div>
    );
}
 
export default Results;