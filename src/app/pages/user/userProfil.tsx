import { FC } from "react";
import HeaderProfil from "../../components/userProfil/headerProfil";
import BodyProfile from "../../components/userProfil/bodyProfil";
import NavBar from "../../components/ui/Navbar";

export const UserProfilPage: FC = () => {
  return (
    <div>
      <NavBar />
      <div className="profile-wrapper">
        <HeaderProfil />
      </div>
    </div>
  );
};
