import Menu from "../components/Menu"
import { useContext } from "react"
import { UseToken } from "../components/UseContextFonction"
import { useState } from "react"

const Recherche = ()=>{
    const[datas, setDaats] = useState([])
    const {spotify} = useContext(UseToken)

    function GetTrack(event){
        event.preventDefault()
        spotify.searchTracks(event.target.value).then((id)=>{
        setDaats(id.tracks.items)
        })
    }

    console.log("j'ai prix les chansons", datas);
    return(
        <main>
            <Menu/>
            <form  onSubmit={GetTrack}>
                <input type="text"   />
                <button type="submit">recherche</button>
            </form>
            
        </main>
    )
}
export default Recherche