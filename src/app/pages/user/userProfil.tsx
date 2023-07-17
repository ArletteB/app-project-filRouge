import { FC } from "react";
import HeaderProfil from "../../components/userProfil/headerProfil";
import BodyProfile from "../../components/userProfil/bodyProfil";

export const UserProfilPage: FC = () => {
  return (
    <div className="profile-wrapper">
      <HeaderProfil />
      <BodyProfile />
    </div>
  );
};
