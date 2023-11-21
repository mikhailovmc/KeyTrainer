import "./style.scss";

const PracticeText = () => {
    return (
        <div className="text">
        <div className="line line-1">
            <span className="done"> На переднем плане, прямо перед</span> 
            <span className="hint">н</span>ами, расположен был дворик, где стоял
        </div>
        <div className="line line-2">
            наполовину вычищенный автомобиль. Шофер Остин был на этот раз
        </div>
        <div className="line line-3">
            уволен окончательно и бесповоротно. Он раскинулся на земле,
        </div>
        <div className="line line-4 hidden">
            и большая черная ссадина на лбу свидетельствовала, по-видимому, о том,
        </div>
        <div className="line line-5 hidden"> что он при падении ударился головою о подножку или щит.</div>
    </div> 
    );
}
 
export default PracticeText;