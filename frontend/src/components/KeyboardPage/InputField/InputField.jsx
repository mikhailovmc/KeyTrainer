import "./style.scss";

const InputField = () => {
    return (
        <form action="">
			<input 
				type="text" 
				className="input " 
				placeholder="Поле для ввода текста" 
				value="На переднем плане, прямо перед"
			/>
		</form>
    );
}
 
export default InputField;