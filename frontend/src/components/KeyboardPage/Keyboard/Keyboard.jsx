import "./style.scss";

const Keyboard = () => {
    return (
        <div className="keyboard">
			<div className="line">
				<div>Ё</div>
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
				<div>6</div>
				<div>7</div>
				<div>8</div>
				<div>9</div>
				<div>0</div>
				<div>-</div>
				<div>+</div>
				<div className="backspace">Backspace</div>
			</div>
			<div className="line">
				<div className="tab">Tab</div>
				<div>Й</div>
				<div>Ц</div>
				<div>У</div>
				<div>К</div>
				<div>Е</div>
				<div className="hint">Н</div>
				<div>Г</div>
				<div>Ш</div>
				<div>Щ</div>
				<div>З</div>
				<div>Х</div>
				<div>Ъ</div>
				<div>\</div>
			</div>
			<div className="line">
				<div className="caps">Caps Lock</div>
				<div>Ф</div>
				<div>Ы</div>
				<div>В</div>
				<div>А</div>
				<div>П</div>
				<div>Р</div>
				<div>О</div>
				<div>Л</div>
				<div>Д</div>
				<div>Ж</div>
				<div>Э</div>
				<div className="enter">Enter</div>
			</div>
			<div className="line">
				<div className="shift">Shift</div>
				<div>Я</div>
				<div>Ч</div>
				<div>С</div>
				<div>М</div>
				<div>И</div>
				<div>Т</div>
				<div>Ь</div>
				<div>Б</div>
				<div>Ю</div>
				<div>. <sup>,</sup></div>
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