import Menu from "../components/Menu"
import { useState, useEffect, useContext } from "react"
import { UseToken } from "../components/UseContextFonction"

const Bibliotheque = ()=>{

const [PlayedTrack, setPlayedtrack] =useState([])
const {spotify} = useContext(UseToken)
console.log("voici maa cle", spotify);

useEffect(()=>{
spotify.getMyRecentlyPlayedTracks().then((e)=>{
    console.log("voici ma playlist", e);
    setPlayedtrack(e)
})
})
console.log("la musique recentes",PlayedTrack);
    return(
        <main>
            <Menu/>
            hello Bibliotheque
        </main>
    )
}
export default Bibliotheque