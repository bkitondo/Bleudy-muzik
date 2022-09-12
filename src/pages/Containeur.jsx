
import PageAccueil from "./PageAccueil";
import PageConnexion from "./PageConnexion";
import Recherche from "./Recherche"
import Bibliotheque from "./Bibliotheque"
import AjouterPlaylist from "./AjouterPlaylist"
import Header from "../components/Header";
import Footer from "../components/Footer";

import {UseToken} from "../components/UseContextFonction";
import {useState, useEffect} from "react"
import SpotifyWebApi from "spotify-web-api-js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const spotify = new SpotifyWebApi();

const Containeur = ()=> {
  
  const [token, setToken] = useState(""),
        [me , setMe] = useState([]),
        [uri, setUri] = useState("")
        console.log("voici le uri selectionné", uri);

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

  
  return (

    <main>
      <UseToken.Provider value={{ token,setToken,spotify }}>
        {(token)? <Header me ={me} setMe = {setMe} />: null}  
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ (!token)? <PageConnexion />: <PageAccueil/>} />
            <Route path="/accueil" element={ (token)? <PageAccueil setUri={setUri} />:<PageConnexion/>} />
            <Route path="/recherche"  element={ (token)? <Recherche setUri={setUri}/>:<PageConnexion/>} />
            <Route path="/bibliotheque"  element={ (token)? <Bibliotheque />:<PageConnexion/>} />
            <Route path="/ajouterPlaylist"  element={ (token)? <AjouterPlaylist />:<PageConnexion/>} />
        </Routes>
        </BrowserRouter>
        {(token)? <Footer uri={uri} setUri={setUri} />: null}
      </UseToken.Provider>
    </main>
  );
}

export default Containeur
