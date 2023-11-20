import UserHeader from "./../../Headers/UserHeader"
import "./style.scss"

const Instruction = () => {
    return (
        <>
            <UserHeader/>
            <div className="instruction">
                <div className="container">
                    <h2 className="instruction__title">Посадка и положение рук</h2>
                    <p className="instruction__text">
                        При работе за компьютером очень важно правильно сидеть. Стул должен быть отрегулирован по высоте. Сидите прямо, не касаясь спинки стула. 
                        Ноги держите под столом одну возле другой; не рекомендуется их вытягивать вперед или прятать под стул. Плечи не напрягайте. 
                        Руки от плечевого до локтевого сустава должны быть свободно опущены вниз и идти параллельно туловищу. Кисти рук не должны касаться клавиатуры, 
                        локти слегка касаются туловища. В локтевом суставе их сгибают примерно под углом 90°. Предплечья направляют к центру клавиатуры, 
                        пальцы свободно опускают на клавиши, кисти подтягивают к центру. Кисти, предплечья и локоть должны находиться на одном уровне с клавиатурой. 
                        Передние края клавиатуры и стола должны совпадать. 
                    </p>

                    <h2 className="instruction__title">Посадка и положение рук</h2>
                    <p>Последовательность постановки рук и пальцев на клавиатуре:</p>
                    <ol className="instruction__list">
                        <li>Согните руки в локтях, вытяните кисти вперед ладонями вниз.</li>
                        <li>Соедините кисти, соприкасаясь указательными пальцами, большие пальцы опущены вниз.</li>
                        <li>Первые две фаланги пальцев опустите вниз, слегка согнув их.</li>
                        <li>Разведите кисти в стороны, оставив между указательными пальцами расстояние, равное 4 см.</li>
                        <li>Опустите руки на клавиатуру (левый указательный палец попадет на клавишу А, а правый — на О; данные клавиши имеют выступ, что позволяет контролировать правильность расположения рук).</li>
                    </ol>
                        
                    <p className="instruction__text">
                        Если рекомендации выполнены правильно, то все пальцы встанут на основную позицию, касаясь кончиками середины отведенных им клавиш. 
                        При постановке на основную позицию пальцы рук должны быть слегка согнутыми, как будто рука держит круглый предмет. 
                        Указательные пальцы слегка касаются кончиками середины клавиш А и О, но не опираются на них. Правильная посадка и положение рук показаны на рисунке ниже.
                    </p>    
                        
                    <img src="" alt="" />
                </div>
            </div>
        </>
        
        
    );
}
 
export default Instruction;