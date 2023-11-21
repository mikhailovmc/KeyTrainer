import { useEffect, useState } from "react";
import "./style.scss";

const Keyboard = ({ pressedKey }) => {

	const [letters, setLetters] = useState([]);
	console.log(pressedKey)
	console.log(letters)
	useEffect(() => {
		const allWithClass = Array.from(document.querySelectorAll('[data-letters]'));
		setLetters(allWithClass)
		console.log(allWithClass)
		
	}, []);

	const letter = letters.find(x => x.dataset.letters.includes(pressedKey));
		console.log(letter)
		if(letter) {
			letter.classList.add('hint')
		}
	
	
    return (
        <div className="keyboard">
			<div className="line">
				<div data-letters="Ёё">Ё</div>
				<div data-letters="1">1</div>
				<div data-letters="2">2</div>
				<div data-letters="3">3</div>
				<div data-letters="4">4</div>
				<div data-letters="5">5</div>
				<div data-letters="6">6</div>
				<div data-letters="7">7</div>
				<div data-letters="8">8</div>
				<div data-letters="9">9</div>
				<div data-letters="0">0</div>
				<div data-letters="-">-</div>
				<div data-letters="+">+</div>
				<div data-letters="Backspace" className="backspace">Backspace</div>
			</div>
			<div className="line">
				<div className="tab" data-letters="Tab">Tab</div>
				<div data-letters="Йй">Й</div>
				<div data-letters="Цц">Ц</div>
				<div data-letters="Уу">У</div>
				<div data-letters="Кк">К</div>
				<div data-letters="Ее">Е</div>
				<div data-letters="Нн"className="hint" >Н</div>
				<div data-letters="Гг">Г</div>
				<div data-letters="Шш">Ш</div>
				<div data-letters="Щщ">Щ</div>
				<div data-letters="Зз">З</div>
				<div data-letters="Хх">Х</div>
				<div data-letters="Ъъ">Ъ</div>
				<div data-letters="">\</div>
			</div>
			<div className="line">
				<div data-letters="CapsLock"className="caps">Caps Lock</div>
				<div data-letters="Фф">Ф</div>
				<div data-letters="Ыы">Ы</div>
				<div data-letters="Вв">В</div>
				<div data-letters="Аа">А</div>
				<div data-letters="Пп">П</div>
				<div data-letters="Рр">Р</div>
				<div data-letters="Оо">О</div>
				<div data-letters="Лл">Л</div>
				<div data-letters="Дд">Д</div>
				<div data-letters="Жж">Ж</div>
				<div data-letters="Ээ">Э</div>
				<div data-letters="Enter" className="enter">Enter</div>
			</div>
			<div className="line">
				<div className="shift">Shift</div>
				<div data-letters="Яя">Я</div>
				<div data-letters="Чч">Ч</div>
				<div data-letters="Сс">С</div>
				<div data-letters="Мм">М</div>
				<div data-letters="Ии">И</div>
				<div data-letters="Тт">Т</div>
				<div data-letters="Ьь">Ь</div>
				<div data-letters="Бб">Б</div>
				<div data-letters="Юю">Ю</div>
				<div data-letters=".,">. <sup>,</sup></div>
				<div className="shift">Shift</div>
			</div>
			<div className="line">
				<div className="space"></div>
				<div className="alt">Alt</div>
			</div>
		</div>
    );
}
 
export default Keyboard;