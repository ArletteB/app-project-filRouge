import { FC } from "react";

import { Link } from "react-router-dom";

export const HomePage: FC = () => {
  return (
    <div className="content-homePage">
      <div className="welcome-text">
        <h2>Bienvenue sur "Social Link" </h2>
      </div>
      <div className="overlay">
        <Link to="/auth/signin">Connexion</Link>
        <Link to="/auth/signup">Inscription</Link>
      </div>
    </div>
  );
};
