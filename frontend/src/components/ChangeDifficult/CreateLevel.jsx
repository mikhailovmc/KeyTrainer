import AdminHeader from "../Headers/AdminHeader";
import "./style.scss"

const CreateLevel = () => {
    return (
        <>
            <AdminHeader/>

            <div className="changeDifficult">
                
                <form className="changeDifficult__form" action="">
                    <p className="changeDifficult__title">Создание / Редактирование упражнения</p>
                    <p className="changeDifficult__id">ID упражнения:</p>
                    <p className="changeDifficult__text">Выбор уровня сложности:</p>
                    <label className="changeDifficult__label">
                        <input className="input" name="difficult" type="radio" id="easy"/>
                        Легкий
                    </label>
                    
                    <label className="changeDifficult__label">
                        <input className="input" name="difficult" type="radio" id="medium"/>
                        Средний
                    </label>

                    <label className="changeDifficult__label">
                        <input className="input" name="difficult" type="radio" id="hard"/>
                        Сложный
                    </label>

                    <p className="changeDifficult__text">Выбор зон клавиатуры:</p>
                    <div className="changeDifficult__zone">
                        <label className="changeDifficult__label inner--label">
                            <input className="input-checkbox" type="checkbox" id="hard"/>
                            1
                        </label>

                        <label className="changeDifficult__label inner--label">
                            <input className="input-checkbox" type="checkbox" id="hard"/>
                            2
                        </label>

                        <label className="changeDifficult__label inner--label">
                            <input className="input-checkbox" type="checkbox" id="hard"/>
                            3
                        </label>

                        <label className="changeDifficult__label inner--label">
                            <input className="input-checkbox" type="checkbox" id="hard"/>
                            4
                        </label>

                        <label className="changeDifficult__label inner--label">
                            <input className="input-checkbox" type="checkbox" id="hard"/>
                            Пробел
                        </label>
                    </div>

                    

                    
                    <label className="changeDifficult__label">
                        Допустимое количество ошибок:
                        <input className="input-text" type="number" />
                    </label>

                    <label className="changeDifficult__label">
                        Время на выполнение:
                        <input className="input-text" type="number" />
                    </label>

                    <div className="buttons-wrapper">
                        <button className="button">Созадть упражнения автоматически</button>
                        <button className="button">Сохранить</button>
                    </div>
                    

                </form>
            </div>
        </>
    );
}
 
export default CreateLevel;