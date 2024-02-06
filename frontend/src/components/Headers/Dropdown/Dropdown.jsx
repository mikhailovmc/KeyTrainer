import { Link } from "react-router-dom";
import "./../style.scss";

const Dropdown = ({title, links}) => {
    return (
        <div className="dropdown">
            <span className="dropbtn">{title}</span>
            <div className="dropdown-content">
                {links.map(link => {
                    return (
                        <Link to={link.url}>
                            {link.title}
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}
 
export default Dropdown;