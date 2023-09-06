// // EventForm.tsx
import React, { useState } from "react";
import "./EventForm.scss";
import EventService from "../../../../setup/services/event.service";
import { EventType } from "../../../../setup/types/event/event.type";
import { useUserContext } from "../../../../setup/contexts/UserContext";
import { supabase } from "../../../../setup/supabase";

interface EventFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  image: File | null;
  title: string;
  date: string;
  address: string;
  description: string;
}

const EventForm: React.FC = () => {
  const { user } = useUserContext();
  const [formData, setFormData] = useState<FormData>({
    image: null,
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

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      image: event.target.files![0],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Upload de l'image à Supabase
    let imageUrl = "";
    if (formData.image) {
      const { data, error } = await supabase.storage
        .from("your-storage-bucket") // Remplacez par votre bucket de stockage
        .upload(`events/${formData.image.name}`, formData.image);

      if (error) {
        console.error("Erreur lors du téléchargement de l'image:", error);
      } else {
        imageUrl = data!.path || "";
      }
    }

    // Préparez les données à envoyer à votre backend ou Supabase DB
    const formDataToSend = new FormData();
    formDataToSend.append("cover", imageUrl);
    formDataToSend.append("title", formData.title);
    formDataToSend.append("dateEvent", formData.date);
    formDataToSend.append("adress", formData.address);
    formDataToSend.append("description", formData.description);

    // Envoi des données à votre backend ou Supabase DB
    await EventService.createEvent(formDataToSend);
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <input type="file" name="image" onChange={handleImageChange} />
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
