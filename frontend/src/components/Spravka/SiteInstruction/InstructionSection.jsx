import "./style.scss";

const InstructionSection = ({title, text, id, urlImg, imgAlt}) => {
    return (
        <section className="site-instruction__section" id={id}>
            <h2>{title}</h2>
            <p>{text}</p>
            {urlImg && <img src={urlImg} alt={imgAlt} />}
        </section>
    );
}
 
export default InstructionSection;