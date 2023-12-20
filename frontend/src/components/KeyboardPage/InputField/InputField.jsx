import "./style.scss";

const InputField = ({handleLetter, letters, specs, party}) => {

	function press (letter) {
        console.log(letter);
		const string = party.strings[party.currentStringIndex];
		const mustLetter = string[party.currentPressedIndex];

		console.log(letter, mustLetter);

		if (letter === mustLetter) {
			party.currentPressedIndex++
		} else party.errors++;

		viewUpdate()
    }

	function viewUpdate () {
		const showedStrings = party.strings.slice(
			party.currentStringIndex,
			party.currentStringIndex + party.maxShowStrings
		);
    }

	function keydownHandler(event) {
		event.preventDefault();
		 
		const letter = letters.find(x => x.dataset.letters.includes(event.key));

		if(letter) {
			letter.classList.add('hint');
			press(event.key);
			return;
		}

		if (event.key === " ") {
			event.key = "space";
			press('')
		}

		if (event.key === "Enter") {
			press('\n')
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
			press(event.key);
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