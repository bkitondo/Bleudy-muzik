import Menu from "../components/Menu"
import { useContext } from "react"
import { UseToken } from "../components/UseContextFonction"
import { useState } from "react"
import "../styles/Recherche.css"
import "../styles/items.css"

const Recherche = ({setUri})=>{
    const[datas, setDaats] = useState([])
    const {spotify} = useContext(UseToken)
    const [value, setValue] = useState("")

    function GetTrack(event){
        event.preventDefault()
        spotify.searchTracks(value).then((dataApi)=>{
        setDaats(dataApi.tracks.items)
        })
    }
const dataApi = datas;
    console.log("j'ai prix les chansons", datas);
    return(
        <main className="principal">
            <Menu/>
            <div className="secondaire">
                <div className="form" >

                <form  onSubmit={GetTrack}>
                    <input className="input" type="search" placeholder="tapez votre recherche ici" onChange={(e)=> setValue(e.target.value)} />
                    <button className="btnInput" type="submit">recherche</button>
                </form>
                </div>
                <article className='conatinerRecherche'>
                    <ul className="ul">
                        {dataApi.map((item, index)=>{
                         return( 
                            <li key={index}  className="Cart" onClick={()=>setUri(item.uri)}>
                                <img
                                    className="image1"
                                    src={item.album.images[0].url}
                                    alt="l'image de l'artiste"
                                /> 
                                <p className="nom" >{item.album.artists[0].name} </p>
                                <p>{item.name} </p>
                            </li>
                            )}
                            )}
                    </ul>
                </article>
            </div>
            
        </main>
    )
}
export default Recherche