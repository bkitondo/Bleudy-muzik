
import PageAccueil from "./PageAccueil";
import PageConnexion from "./PageConnexion";
import Recherche from "./Recherche"
import Bibliotheque from "./Bibliotheque"
import AjouterPlaylist from "./AjouterPlaylist"
import Header from "../components/Header";
// import Footer from "../components/Footer";

import {UseToken} from "../components/UseContextFonction";
import {useState, useEffect} from "react"
import SpotifyWebApi from "spotify-web-api-js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const spotify = new SpotifyWebApi();

const Containeur = ()=> {
    
    const [token, setToken] = useState("");
    // const [uri, setUri] = useState("")

    useEffect(() => {
      const hash = window.location.hash;
      let token = window.localStorage.getItem("token");
  
      if (hash) {
        token = hash
          .substring(1)
          .split("&")
          .find((element) => element.startsWith("access_token"))
          .split("=")[1];
  
        window.location.hash = "";
        window.localStorage.setItem("token", token);
      }
      setToken(token);
      spotify.setAccessToken(token);
    }, [token]);

    const [me , setMe] = useState([])
  
  return (

    <main>
      <UseToken.Provider value={{ token,setToken,spotify }}>
        {(token)? <Header me ={me} setMe = {setMe} />: null}  
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ (!token)? <PageConnexion />: <PageAccueil/>} />
            <Route path="/accueil" element={ (token)? <PageAccueil />:<PageConnexion/>} />
            <Route path="/recherche"  element={ (token)? <Recherche/>:<PageConnexion/>} />
            <Route path="/bibliotheque"  element={ (token)? <Bibliotheque />:<PageConnexion/>} />
            <Route path="/ajouterPlaylist"  element={ (token)? <AjouterPlaylist />:<PageConnexion/>} />
        </Routes>
        </BrowserRouter>
      </UseToken.Provider>
    </main>
  );
}

export default Containeur
