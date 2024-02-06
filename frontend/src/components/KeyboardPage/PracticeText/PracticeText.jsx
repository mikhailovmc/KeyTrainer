import "./style.scss";

const PracticeText = ({ text, currentIndex}) => {
    return (
		<div className="line line-1">
			{
        text.split('').map((char, i) => {
          return (
            i < currentIndex ?
            <span className="done">{char}</span> : 
            i === currentIndex ?
            <span className="hint">{char}</span> :
            <span>{char}</span>
          )
        })   
			}
		</div>
  )
}
 
export default PracticeText;