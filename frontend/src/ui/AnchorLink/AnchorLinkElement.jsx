import AnchorLink from "react-anchor-link-smooth-scroll";

const AnchorLinkElement = ({links}) => {
    
    return (
        <>
        {
            links.map(link => {
                return (
                    <li>
                        <AnchorLink href={link.url}>
                            {link.title}
                        </AnchorLink>
                    </li>
                )
            }) 
        }
        </>
    )
}
 
export default AnchorLinkElement;