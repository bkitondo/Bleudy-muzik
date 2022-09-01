import { Link } from "react-router-dom"
import {AiOutlineHome, AiOutlineSearch, AiOutlinePlusCircle} from "react-icons/ai"
import {BiLibrary} from "react-icons/bi"
import "../styles/Menu.css"


const Menu =()=>{
    return(
            <nav  className="nav">
                <Link className="lien" to="/accueil">
                    <AiOutlineHome/>
                    <span className="item" >Accueil</span> 
                </Link>
                <Link className="lien" to="/recherche">
                    <AiOutlineSearch/>
                   <span  className="item">Recherche</span> 
                    </Link>
                <Link className="lien" to="/bibliotheque">
                    <BiLibrary/>
                    <span  className="item">Bibliotheque</span> 
                </Link>
                <Link className="lien" to="/ajouterPlaylist">
                    <AiOutlinePlusCircle/>
                    <span  className="item">AjouterPlaylist</span>  
                    </Link>
            </nav>
    )
}
export default Menu