import { FC } from "react";
import { useUserContext } from "../../../setup/contexts/UserContext";

export const HomePage: FC = () => {
  const { user } = useUserContext();
  console.log(user);

  if (!user) {
    // Si l'utilisateur n'est pas défini, vous pouvez afficher un message ou une indication de chargement
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Bienvenue, {user.firstName}!</h2>
      <p>Email: {user.email}</p>
      {/* Autres informations utilisateur */}
    </div>
  );
};
