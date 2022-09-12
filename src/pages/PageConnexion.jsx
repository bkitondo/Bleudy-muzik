import "../styles/Connexion.css"

const PageConnexion = ()=>{
  
const CLIENT_ID = "4d1b4fd1a8f041248da6a12d1bc25f9b"  
const REDIRECT_URI = "http://localhost:3000/accueil"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"
const scope = [
    "user-read-email",
    "ugc-image-upload",
    "user-read-recently-played",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "streaming",
    "user-read-playback-position",
    "user-top-read",
    "user-read-private",
    "app-remote-control",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-read-private",
    "playlist-modify-private",
    "user-library-modify",
    "user-library-read",
    "user-follow-modify",
    "user-follow-read",
  ]

return(
<main className="mainConnexion" >
<h1 className="h1Connexion"> Bienvenue sur Bleudy-Muzik</h1>
{/* <p> Une application de lecture des musique en ligne. pas besoin d'une carte de credit</p> */}
<button  className="btnConnexion">
<a  className="aConnexion" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scopes=${scope}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&show_dialog=true`}>Se connecter via spotify</a>
</button>  
</main>
)
}
export default PageConnexion