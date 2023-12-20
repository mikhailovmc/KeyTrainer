import { useEffect, useState } from "react";
import "./style.scss";

const InputField = ({handleLetter, letters, specs, party}) => {

	useEffect(() => {
		viewUpdate();
	}, [])
	const [currentDiv, setDiv] = useState();
	function press (letter) {
        console.log(letter);
		const string = party.strings[party.currentStringIndex];
		const mustLetter = string[party.currentPressedIndex];

		console.log(letter, mustLetter);

		if (letter === mustLetter) {
			party.currentPressedIndex++
		} else party.errors++;

		viewUpdate();
    }

	function viewUpdate () {
		// console.log(party)
		// const string = party.strings[party.currentStringIndex]
		// console.log(string)
		// const showedStrings = party.strings.slice(
		// 	party.currentStringIndex,
		// 	party.currentStringIndex + party.maxShowStrings
		// );

		// const firstLine = document.createElement("div");
		// firstLine.classList.add("line");
		// div.append(firstLine);

		// const done = document.createElement("span");
		// done.classList.add("done");

		// const done = string.slice(0, party.currentPressedIndex);
		// const currentText = [...string.slice(party.currentPressedIndex)].split("").map(letter => letter);
		// console.log(currentText);
		// firstLine.append(done, ...party.currentPressedIndex).split('').map(letter => {
		// 	return letter;
		// });
		// const div = <div>
		// 				<div className="line line-1">
		// 					<span className="done"></span> 
		// 					<span className="hint">н</span>ами, расположен был дворик, где стоял
		// 				</div>
		// 			</div>
		
		// console.log(div)
		// setDiv(div)
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
		<>
			<div className="text" id="textExample">
				{currentDiv}
						{/* <div>
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
						</div> */}
			</div> 

			<form action="">
				<input 
					onKeyDown={keydownHandler}
					onKeyUp={keyupHandler}
					type="text" 
					className="input " 
					placeholder="Поле для ввода текста" 
				/>
			</form>
		</>
       
    );
}
 
export default InputField;