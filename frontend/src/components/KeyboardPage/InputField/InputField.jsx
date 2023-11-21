import "./style.scss";

const InputField = ({handleLetter, letters, specs}) => {

	function keydownHandler(event) {
		event.preventDefault();
		 
		const letter = letters.find(x => x.dataset.letters.includes(event.key));

		if(letter) {
			letter.classList.add('hint');
			return;
		}

		if (event.key === " ") {
			event.key = "space";
		}

		const ownSpec = specs.filter(x => x.dataset.specs === event.key);
	
		if(ownSpec.length) {
			ownSpec.forEach(spec => spec.classList.add('hint'));
			return;
		}
	}

	function keyupHandler(event) {
		event.preventDefault();
		 
		const letter = letters.find(x => x.dataset.letters.includes(event.key));

		if(letter) {
			letter.classList.remove('hint');
			return;
		}

		if (event.key === " ") {
			event.key = "space";
		}

		const ownSpec = specs.filter(x => x.dataset.specs === event.key);
	
		if(ownSpec.length) {
			ownSpec.forEach(spec => spec.classList.remove('hint'));
			return;
		}

		console.warn("Не известный тип клавиши")
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