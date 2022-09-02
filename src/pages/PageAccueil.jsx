import Menu from "../components/Menu"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { UseToken } from "../components/UseContextFonction"
import { useContext } from "react"
import { useEffect,  useState } from "react"
import "../styles/PageAccueil.css"
import "../styles/items.css"

const PageAccueil =()=>{
    const [data, setData]=useState([])
    const {spotify}= useContext(UseToken)
    const [me , setMe] = useState([])
    const [uri, setUri]= useState("")

useEffect(()=>{
    spotify.getNewReleases().then((datas)=>{
        setData(datas.albums.items)
        // spotify.getMyRecentlyPlayedTracks().then(res=>{
        //     console.log("trigo",res);
    })

}, [spotify])

 const dataApi = data
 console.log("news ", dataApi);
    return(
         <main>
            <Header   me={me} setMe={setMe} />
            <div className="body">
                <Menu/>
                <article className='conatiner'>
                    <h2>Nouveautés tendance</h2>
                    <ul className="ul">
                        {dataApi.map((item, index)=>{
                         return( 
                            <li key={index}  className="Cart"  onClick={() => setUri(item.uri)}>
                                <img
                                    className="image1"
                                    src={item.images[0].url}
                                    alt="l'image de l'artiste"
                                />
                                <p>{item.artists[0].name} </p>
                                <p>{item.name} </p>
                            </li>
                            )}
                            )}
                        
                    </ul>
                </article>
            </div>
          <Footer uri={uri} setUri={setUri} />  
         </main>   
    )
}
export default PageAccueil
