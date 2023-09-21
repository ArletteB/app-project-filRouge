// NavBar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../setup/contexts/UserContext";
import socialLink from "../../assets/img/socialLink.png";

const NavBar: React.FC = () => {
  const { user } = useUserContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`nav-content ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
    >
      <div className="logo">
        <img src={socialLink} alt="Logo" />
      </div>
      <button
        className={`nav-burger ${isMobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div className={`sidebar-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/events" onClick={toggleMobileMenu}>
              Évènements
            </Link>
          </li>
          <li>
            <Link to="/groups" onClick={toggleMobileMenu}>
              Groupes
            </Link>
          </li>
          {user && (
            <li>
              <Link to="/profile" onClick={toggleMobileMenu}>
                Profil
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
