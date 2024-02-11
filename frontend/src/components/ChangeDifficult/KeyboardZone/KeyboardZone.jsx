const KeyboardZone = ({func, zones}) => {
    return (
        <>
            <p className="changeDifficult__text">Выбор зон клавиатуры:</p>
            <div className="changeDifficult__zone">
                <label className="changeDifficult__label inner--label">
                    <input className="input-checkbox" type="checkbox" checked={zones.listOfZones.includes("1")}  value="1" onChange={func}/>
                    1
                </label>

                <label className="changeDifficult__label inner--label">
                    <input className="input-checkbox" type="checkbox" checked={zones.listOfZones.includes("2")} value="2" onChange={func}/>
                    2
                </label>

                <label className="changeDifficult__label inner--label">
                    <input className="input-checkbox" type="checkbox" checked={zones.listOfZones.includes("3")} value="3" onChange={func}/>
                    3
                </label>

                <label className="changeDifficult__label inner--label">
                    <input className="input-checkbox" type="checkbox" checked={zones.listOfZones.includes("4")} value="4" onChange={func}/>
                    4
                </label>
            </div>
        </>
    );
}
 
export default KeyboardZone;