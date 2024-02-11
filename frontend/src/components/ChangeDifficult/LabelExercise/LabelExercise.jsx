const LabelExercise = ({value, func, inputType, children }) => {
    return (
        <label className="changeDifficult__label">
            {children}
            <input className="input-text" 
                type={inputType} 
                value={value} 
                onChange={e => func(e.target.value)} 
                required />
        </label>
    );
}
 
export default LabelExercise;