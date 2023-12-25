import "./style.scss";
import errorPic from "./../../../assets/icons/error-mark.png";
import timerPic from "./../../../assets/icons/timer.png";
import lengthPic from "./../../../assets/icons/length.png";

const Results = ({maxErrors, maxTime, errorCount, timeLeft, length, remainLength}) => {
    return (
        <div className="results ">
			<div className="results-title">Результаты:</div>
			<div className="indicators">
				
				<div className="indicator">
					<div className="indicator__icon">
						<img src={lengthPic}/>
					</div>
					<div className="indicator__name">Длина: {remainLength} / {length}</div>
				</div>

				<div className="indicator">
					<div className="indicator__icon indicator__icon--errors">
						<img src={errorPic}/>
					</div>
					<div className="indicator__name">Ошибок: {errorCount} / {maxErrors}</div>
				</div>

				<div className="indicator">
					<div className="indicator__icon indicator__icon--errors">
						<img src={timerPic}/>
					</div>
					<div className="indicator__name">Время: {timeLeft} / {maxTime} cек</div>
				</div>
			</div>
		</div>
    );
}
 
export default Results;