import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import { useState } from "react"
import "./navbar.scss"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset <= 0 ? false : true)
    return () => (window.onscroll = null);
  };

  console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
          <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="image netflix"
            />
            <span>Accueil</span>
            <span>Séries</span>
            <span>Films</span>
            <span>Nouveautés et Popularité</span>
            <span>Ma liste</span>
          </div>
          <div className="right">
            <Search className="icon"/>
            <span>ENFANT</span>
            <Notifications className="icon"/>
            <img src="https://images.pexels.com/photos/3794359/pexels-photo-3794359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="imgpexel" />
            <div className="profile">
              <ArrowDropDown className="icon"/>
              <div className="options">
                <span>Réglages</span>
                <span>Se déconnecter</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar