import { useEffect } from "react";
import { useContext } from "react";
import { UseToken } from "./UseContextFonction";
import { AiOutlineLogout } from "react-icons/ai";
import "../styles/Header.css";

import logo from "../medias/logo.png";

const Header = ({ me, setMe }) => {
  const { spotify,setToken } = useContext(UseToken);
  useEffect(() => {
    spotify.getMe().then((id) => {
      setMe(id);
      console.log("id c'est ", id);
    });
  }, [spotify]);

  function Logout() {
    setToken("");
    window.localStorage.removeItem("token");
  }

  return (
    <main className="main">
      <div className="children">
        <img className="logo" src={logo} alt="le logo de Bleudy-Muzik" />
        <span className="title">B-Muzik</span>
      </div>
      <div className="children">
        {/* <img src={me.images} alt="" /> */}
        <span className="name">{me.display_name} </span>
        <button className="btn" onClick={Logout}>
          <AiOutlineLogout />
        </button>
      </div>
    </main>
  );
};
export default Header;
