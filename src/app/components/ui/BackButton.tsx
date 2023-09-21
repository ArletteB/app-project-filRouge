import React from "react";
import { IconContext } from "react-icons";
import { GoArrowLeft } from "react-icons/go";

const BackButton: React.FC = () => {
  const goBack = () => {
    window.history.back(); // Revenir à la page précédente
  };

  return (
    <button className="back-button" onClick={goBack}>
      <IconContext.Provider value={{ size: "1.5em" }}>
        <GoArrowLeft /> {/* Utilisez l'icône GoArrowLeft */}
      </IconContext.Provider>
      Retour
    </button>
  );
};

export default BackButton;
