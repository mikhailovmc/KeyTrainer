import "./style.scss";

const InputField = ({press, letters, specs, currentInputValue}) => {
	function keydownHandler(event) {
		event.preventDefault();
		console.log(event.key)
		const letter = letters.find(x => x.dataset.letters.includes(event.key));

		if(letter) {
			letter.classList.add('hint');
			press(event.key);
			return;
		}

		let key = event.key.toLowerCase();

		if (key === " ") {
			key = "space";
			press(" ")
		}

		if (event.key === "Enter") {
			press('\n')
		}

		const ownSpec = specs.filter(x => x.dataset.specs === key);
		
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
		<>
			<form action="">
				<input 
					onKeyDown={keydownHandler}
					onKeyUp={keyupHandler}
					type="text" 
					className="input " 
					placeholder="Поле для ввода текста"
					defaultValue={currentInputValue}
					autofocus="autofocus" 
				/>
			</form>
		</>
    );
}
 
export default InputField;