import SpotifyPlayer from 'react-spotify-web-playback';
import { UseToken } from './UseContextFonction';
import { useContext, useEffect, useState } from 'react';

const Footer = ({uri})=>{
    const {token} = useContext(UseToken),
          [play, setPlayer] = useState(false)

    useEffect(()=>{
        setPlayer(true)
    },[uri])

    return(
        <main>
            <div className="player" >
                <SpotifyPlayer
                // styles={{
                // activeColor: '#fff',
                // bgColor: '#333',
                // color: '#fff',
                // loaderColor: '#fff',
                // sliderColor: '#1cb954',
                // trackArtistColor: '#ccc',
                // trackNameColor: '#fff',
                // }}
                token={token}
                uris={uri}
                play={play}
                autoPlay={true}
                callback={(value)=>{
                    !value.isPlaying ? setPlayer(false) : setPlayer(true)
                }}
                />
            </div>
        </main>
    )
}
export default Footer