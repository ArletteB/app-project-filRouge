import { createContext, useContext, useState } from "react";
import { UserType } from "../types/auth/user.type";

// Définir l'interface pour le contexte utilisateur
interface UserContextType {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
}

interface PropsChildren {
  children: React.ReactNode;
}

// Créer le contexte utilisateur
const UserContext = createContext<UserContextType | undefined>(undefined);

// Créer un composant fournisseur de contexte pour envelopper votre application
export const UserProvider = ({ children }: PropsChildren) => {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Créer un hook personnalisé pour utiliser le contexte utilisateur
export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      "useUserContext doit être utilisé à l'intérieur d'un UserProvider"
    );
  }

  return context;
};
