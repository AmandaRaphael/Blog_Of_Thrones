import { Link } from "react-router-dom";
import style from "./navBar.module.css";
import logo from "../../assets/images/got-studio-tour-small-new.png";

const NavBar = () => {
  return (
    <div className={style.nav}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      
      <Link to="/aboutMe" className={style.blogger}>
        Blogger
      </Link>
    </div>
  );
};

export default NavBar;
