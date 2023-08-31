// // EventForm.tsx
// import React, { useState } from 'react';
// import './EventForm.scss';
// import EventService from '../../../../setup/services/event.service';
// import { EventType } from '../../../../setup/types/event/event.type';
// import { useUserContext } from '../../../../setup/contexts/UserContext';
// import { supabase } from '../../../../setup/supabase';

// interface EventFormProps {
//   onSubmit: (formData: FormData) => void;
// }

// interface FormData {
//   image: File | null;
//   title: string;
//   date: string;
//   address: string;
//   description: string;
// }

const EventForm: React.FC = () => {
  //   const {user} = useUserContext();
  //   const [formData, setFormData] = useState<FormData>({
  //     image: null,
  //     title: '',
  //     date: '',
  //     address: '',
  //     description: '',
  //   });

  //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //     const { name, value } = e.target;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     if (e.target.files && e.target.files.length > 0) {
  //       setFormData((prevData) => ({
  //         ...prevData,
  //         image: e.target.files[0],
  //       }));
  //     }
  //   };

  //   const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();

  //     // Upload de l'image à Supabase
  //     let imageUrl = '';
  //     if (formData.image) {
  //       const { data, error } = await supabase.storage
  //         .from('your-storage-bucket') // Remplacez par votre bucket de stockage
  //         .upload(`events/${formData.image.name}`, formData.image);

  //       if (error) {
  //         console.error('Erreur lors du téléchargement de l\'image:', error);
  //       } else {
  //         imageUrl = data?.Key || '';
  //       }
  //     }

  //     // Préparez les données à envoyer à votre backend ou Supabase DB
  //     const eventData: EventType = {
  //       id: '', // Générez un ID unique si nécessaire
  //       cover: imageUrl,
  //       title: formData.title,
  //       dateEvent: new Date(formData.date),
  //       adress: formData.address,
  //       description: formData.description,
  //       // creatorEvent: user?.firstName // Assurez-vous de remplir correctement ces données
  //       participants: [], // Assurez-vous de remplir correctement ces données
  //     };

  //     // Envoi des données à votre backend ou Supabase DB
  //     await EventService.createEvent(eventData);
  //   };

  return (
    //     <form className="event-form" onSubmit={handleSubmit}>
    //       <input type="file" name="image" onChange={handleImageChange} />
    //       <input type="text" name="title" placeholder="Titre de l'événement" onChange={handleInputChange} />
    //       <input type="date" name="date" onChange={handleInputChange} />
    //       <input type="text" name="address" placeholder="Adresse de l'événement" onChange={handleInputChange} />
    //       <textarea name="description" placeholder="Description de l'événement" onChange={handleInputChange} />
    //       <button type="submit">Créer l'événement</button>
    //     </form>
    <div className="test"></div>
  );
};

export default EventForm;
