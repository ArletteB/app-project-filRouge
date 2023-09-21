import React from "react";
import { useUserContext } from "../../../setup/contexts/UserContext";
import { Link } from "react-router-dom";
const UserProfile: React.FC = () => {
  const { user } = useUserContext();

  if (!user) {
    return <div>Aucun utilisateur n'est connecté</div>;
  }

  return (
    <>
      <div className="profile-header">
        <img className="profile-image" src={user.imgProfile} alt="" />
        <div className="profile-info">
          <h2 className="profile-infos-name">
            {user.firstName} {user.lastName}
          </h2>
          <div className="profile-infos-content">
            <div>{user.email}</div>
            <div>
              {user.address}, {user.postalCode} {user.city}
            </div>
            <div>{user.phoneNumber}</div>
            <div>{user.gender}</div>
          </div>
          <Link to="/edit-profile">
            {" "}
            {/* Assurez-vous que "/edit-profile" est la route vers la page de modification du profil */}
            <button className="edit-profile-button">Modifier le profil</button>
          </Link>
        </div>
      </div>
      <div className="profile-bio">
        <h3>{user.bio}</h3>
      </div>
    </>
  );
};

export default UserProfile;
