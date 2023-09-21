import axios from "axios";
import React, { useState } from "react";
import { useUserContext } from "../../../../setup/contexts/UserContext";
import { useNavigate } from "react-router-dom";
import GroupService from "../../../../setup/services/group.service";
import UploadEventForm from "./UploadGroupF";
import UploadGroupF from "./UploadGroupF";

interface GroupForm {
  name: string;
  description: string;
  cover: string;
  city: string;
  postalCode: string;
}

const CreateGroup: React.FC = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [groupForm, setGroupForm] = useState<GroupForm>({
    name: "",
    description: "",
    cover: "",
    city: "",
    postalCode: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setGroupForm({ ...groupForm, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Créez un nouvel objet FormData, similaire à EventForm

    try {
      const userId = user?.id;
      if (userId) {
        // Appelez GroupService.create avec FormData et l'ID de l'utilisateur
        await GroupService.create(FormData);

        // Réinitialisez le formulaire après la soumission réussie
        setGroupForm({
          name: "",
          description: "",
          cover: "",
          city: "",
          postalCode: "",
        });

        navigate("/groups");
      } else {
        console.error("ID de l'utilisateur non trouvé.");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du groupe :", error);
    }
  };

  const handleUploadComplete = (fileUrl: string) => {
    setGroupForm((prevData) => ({
      ...prevData,
      cover: fileUrl, // Mettez à jour l'URL de l'image dans le formulaire
    }));
  };

  return (
    <form className="group-form" onSubmit={handleSubmit}>
      <UploadGroupF setUploadedFile={handleUploadComplete} />
      <input
        type="text"
        name="name"
        placeholder="Nom du groupe"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description du groupe"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="city"
        placeholder="Ville"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="postalCode"
        placeholder="Code postal"
        onChange={handleInputChange}
      />

      <button type="submit">Créer le groupe</button>
    </form>
  );
};

export default CreateGroup;
