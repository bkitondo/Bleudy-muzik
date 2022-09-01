import Menu from "../components/Menu"
import Header from "../components/Header"
import { UseToken } from "../components/UseContextFonction"
import { useContext } from "react"
import { useEffect,  useState } from "react"



const PageAccueil =()=>{
    const [data, setData]=useState([])
    const {spotify, token}= useContext(UseToken)
    const [me , setMe] = useState([])

// useEffect(()=>{
//     setTimeout(()=>{
//         spotify.getNewReleases().then(res=>
//             console.log("this is the userplaylist",res)
            
//     )
//     // spotify.getMyRecentlyPlayedTracks().then(res=>{
//     //     console.log("trigo",res);
//     // }).catch(err=>console.log(err))
    
//     },2000)
// },[token])
useEffect(()=>{
    spotify.getNewReleases().then((datas)=>{
        setData(datas)
        console.log("voici le datas", datas);
    })

}, [token])

 
    return(
         <main>
            <Header   me={me} setMe={setMe} />
            <div>
            <Menu/>
            <main>
                
            </main>
            </div>
            <h1>Bleudy-Muzik</h1>
         </main>   
    )
}
export default PageAccueil
