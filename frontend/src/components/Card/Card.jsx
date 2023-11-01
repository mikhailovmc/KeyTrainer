import "./style.scss"

const Card = (exercises) => {
    console.log("Вывод упражнений в card", exercises);

    
    return (
        <div className="card">
            <div className="card__top">Длина: ZZZ символов</div>
            <div className="card__body">
                <span className="card__percent">100%</span>
                <span className="card__number">№1</span>
            </div>
            <div className="card__footer">
                Наилучшее время: 00:00
            </div>
        </div>
    );
}
 
export default Card;