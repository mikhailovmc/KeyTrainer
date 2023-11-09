import "./style.scss";

const Results = () => {
    return (
        <div className="results ">
			<div className="results-title">Результаты предыдущей строки:</div>
			<div className="indicators">
				<div className="indicator">
					<div className="indicator__icon">
						<i className="fas fa-tachometer-alt"></i>
					</div>
					<div className="indicator__name">Символов в минуту:</div>
					<div className="indicator__value">266</div>
				</div>
				<div className="indicator">
					<div className="indicator__icon indicator__icon--errors">
						<i className="fas fa-exclamation-circle"></i>
					</div>
					<div className="indicator__name">Ошибок:</div>
					<div className="indicator__value">1.41%</div>
				</div>
			</div>
		</div>
    );
}
 
export default Results;