// // EventForm.tsx
import React, { useState } from "react";
import EventService from "../../../../setup/services/event.service";
import { EventType } from "../../../../setup/types/event/event.type";
import { useUserContext } from "../../../../setup/contexts/UserContext";
import { supabase } from "../../../../setup/supabase";
import UploadEventForm from "./UploadEventForm";
import { useNavigate } from "react-router-dom";

interface FormData {
  image: string;
  title: string;
  date: string;
  address: string;
  description: string;
}

const EventForm: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const [formData, setFormData] = useState<FormData>({
    image: "", // Initialise l'URL de l'image à une chaîne vide
    title: "",
    date: "",
    address: "",
    description: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleUploadComplete = (fileUrl: string) => {
    setFormData((prevData) => ({
      ...prevData,
      image: fileUrl, // Mettez à jour l'URL de l'image dans le formulaire
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Créez un nouvel objet FormData
    const formDataToSend = new FormData();
    formDataToSend.append("cover", formData.image); // Assurez-vous que les noms correspondent à votre API
    formDataToSend.append("title", formData.title);
    formDataToSend.append("dateEvent", formData.date);
    formDataToSend.append("adress", formData.address); // Assurez-vous que le nom correspond à votre API
    formDataToSend.append("description", formData.description);

    try {
      const userId = user?.id;
      // Appelez EventService.createEvent avec FormData
      if (userId) {
        // Appelez EventService.createEvent avec FormData et l'ID de l'utilisateur
        await EventService.createEvent(formDataToSend, userId);

        // Réinitialisez le formulaire après la soumission réussie
        setFormData({
          image: "",
          title: "",
          date: "",
          address: "",
          description: "",
        });

        navigate("/events");
      } else {
        console.error("ID de l'utilisateur non trouvé.");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission de l'événement:", error);
    }
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <UploadEventForm setUploadedFile={handleUploadComplete} />
      <input
        type="text"
        name="title"
        placeholder="Titre de l'événement"
        onChange={handleInputChange}
      />
      <input type="date" name="date" onChange={handleInputChange} />
      <input
        type="text"
        name="address"
        placeholder="Adresse de l'événement"
        onChange={handleInputChange}
      />
      <textarea
        name="description"
        placeholder="Description de l'événement"
        onChange={handleInputChange}
      />
      <button type="submit">Créer l'événement</button>
    </form>
  );
};

export default EventForm;
