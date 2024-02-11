const DifficultZone = ({idDifficultyLevel, setIdDifficultyLevel}) => {
    return (
        <>
            <p className="changeDifficult__text">Выбор уровня сложности:</p>
            <label className="changeDifficult__label">
                <input className="input" name="difficult" type="radio" value="1" checked={idDifficultyLevel === 1 ? true : false} onChange={e => setIdDifficultyLevel(e.target.value)}/>
                Легкий
            </label>
                            
            <label className="changeDifficult__label">
                <input className="input" name="difficult" type="radio"  value="2" checked={idDifficultyLevel === 2 ? true : false} onChange={e => setIdDifficultyLevel(e.target.value)}/>
                Средний
            </label>

            <label className="changeDifficult__label">
                <input className="input" name="difficult" type="radio"  value="3" checked={idDifficultyLevel === 3 ? true : false} onChange={e => setIdDifficultyLevel(e.target.value)}/>
                Сложный
            </label>
        </>
    );
}
 
export default DifficultZone;