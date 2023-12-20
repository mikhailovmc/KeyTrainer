import "./style.scss"

const Modal = ({active, setActive, text}) => {

    const showErrorMessage = () => {
        return text.map(error => {
            return (
                <p>{error}</p>
            )
        })
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <p>Ошибка!</p>
                {showErrorMessage()}
            </div>
        </div>
    );
}
 
export default Modal;
