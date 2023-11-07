
import { Link } from "react-router-dom";


import "./style.scss"


const Header = (props) => {
    const links = [...props.links]; 
    const showLinks = () => {
        return links.map(link => {
            return (
                <li key={link.text} className="header__list-item">
                    <Link to={link.route}>
                        {link.text}
                    </Link>
                </li>
            )
        })    
    }

    return (
        
        <header>
            <div className="logo">KeyGym</div>
            <nav>
                <ul className="header__list">
                    {links && showLinks()}
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;