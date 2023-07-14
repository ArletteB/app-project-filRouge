import { FC } from "react";
import { useUserContext } from "../../../setup/contexts/UserContext";
import Navbar from "../../components/ui/Navbar";

export const HomePage: FC = () => {
  const { user } = useUserContext();

  return (
    <div>
      <Navbar />
      {/* <h2>Bienvenue, {user.firstName}!</h2>
      <p>Email: {user.email}</p> */}
      {/* Autres informations utilisateur */}
    </div>
  );
};
