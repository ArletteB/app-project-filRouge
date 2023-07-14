import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../setup/contexts/UserContext";
import "../../styles/navbar.scss";
import socialLink from "../../assets/img/socialLink.png";

const Navbar: React.FC = () => {
  const { user } = useUserContext();
  const [menuburger, setMenuBurger] = useState(false);

  useEffect(() => {
    setMenuBurger(false);
  }, []);

  return (
    <nav className="nav-content">
      <Link to="/" className="logo" onClick={() => setMenuBurger(false)}>
        <img src={socialLink} alt="logo" />
      </Link>

      <button
        type="button"
        className={`nav-burger ${menuburger ? "active" : ""}`}
        onClick={() => {
          setMenuBurger(!menuburger);
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>

      <ul className={`list ${menuburger ? "active" : ""}`}>
        {!user?.email && (
          <>
            <li>
              <Link to="/auth/signin" onClick={() => setMenuBurger(false)}>
                Connexion
              </Link>
            </li>
            <li>
              <Link to="/auth/signup" onClick={() => setMenuBurger(false)}>
                Inscription
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
