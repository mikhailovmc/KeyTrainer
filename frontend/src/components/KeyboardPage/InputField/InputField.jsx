import "./style.scss";

const InputField = ({handleLetter}) => {

	function keydownHandler(event) {
		event.preventDefault();

		handleLetter(event.key)
	}

	function keyupHandler(event) {
		event.preventDefault();
	}

    return (
        <form action="">
			<input 
				onKeyDown={keydownHandler}
				onKeyUp={keyupHandler}
				type="text" 
				className="input " 
				placeholder="Поле для ввода текста" 
				value="На переднем плане, прямо перед"
			/>
		</form>
    );
}
 
export default InputField;