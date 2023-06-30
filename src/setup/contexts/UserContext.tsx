import { createContext, useContext, useState } from "react";

// Définir l'interface pour le contexte utilisateur
interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Définir l'interface pour l'objet utilisateur
interface User {
  firstName: string;
  email: string;
}

interface PropsChildren {
  children: React.ReactNode;
}

// Créer le contexte utilisateur
const UserContext = createContext<UserContextType | undefined>(undefined);

// Créer un composant fournisseur de contexte pour envelopper votre application
export const UserProvider = ({ children }: PropsChildren) => {
  const [user, setUser] = useState<User | null>(null);

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
