import "./style.scss";

const InstructionSection = ({sectionData}) => {
    return (
        <> {
            sectionData.map(data => {
                return (
                    <section className="site-instruction__section" id={data.id}>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                        {data.urlImg && <img src={data.urlImg} alt={data.alt} />}
                        {data.otherText &&
                            <>
                                <p>
                                   {data.otherText}
                                </p>
                                <img src={data.otherImg} alt={data.otherAlt}/>
                            </> 
                        }
                    </section>
                )
            })
        }
        </>
    );
}
 
export default InstructionSection;