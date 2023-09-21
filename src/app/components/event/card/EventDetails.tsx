// EventDetails.tsx
import React, { useEffect, useState } from "react";
import { EventType } from "../../../../setup/types/event/event.type";
import EventService from "../../../../setup/services/event.service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface EventDetailsProps {
  eventId: string;
}

const EventDetails: React.FC<EventDetailsProps> = ({ eventId }) => {
  const [event, setEvent] = useState<EventType | null>(null);
  const [participantsCount, setParticipantsCount] = useState(0);

  useEffect(() => {
    // Chargez les détails de l'événement en utilisant l'API
    const fetchEventDetails = async () => {
      try {
        const eventData = await EventService.getEventById(eventId);
        setEvent(eventData);
      } catch (error) {
        // Gérez les erreurs ici
        console.error(
          "Erreur lors du chargement des détails de l'événement",
          error
        );
      }
    };

    fetchEventDetails();
  }, [eventId]);

  if (!event) {
    return <div>Chargement en cours...</div>;
  }
  const handleSignUp = () => {
    toast.success("Vous êtes bien inscrit !");
    setParticipantsCount(participantsCount + 1);
  };
  const formatFrenchDate = (date: any) => {
    if (date) {
      return new Intl.DateTimeFormat("fr-FR", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }).format(new Date(date));
    }
    return "Date inconnue";
  };

  return (
    <div className="event-details">
      <div className="event-details-img">
        <img src={event.cover} alt={event.title} />
      </div>
      <div className="event-details-infos">
        <h2 className="event-details-infos-title">{event.title}</h2>
        <p className="event-details-infos-date">
          Date de l'événement :{formatFrenchDate(event.dateEvent)}
        </p>

        <p className="event-details-infos-adresse">Adresse : {event.adress}</p>
        <div className="event-details-infos-participants">
          <p>{participantsCount} participant(s)</p>
        </div>
        <button onClick={handleSignUp}>S'inscrire</button>
        <p className="event-details-infos-description">
          Description : {event.description}
        </p>
      </div>
      <div className="event-details-creator-event">
        <h3>Créateur de l'événement</h3>
        {event && event.CreatorEvent ? (
          <div className="event-creator">
            <img src={event.CreatorEvent.imgProfile} alt="" />
            <p>
              Nom du créateur :{" "}
              {event.CreatorEvent.firstName + " " + event.CreatorEvent.lastName}
            </p>
          </div>
        ) : (
          <p>Créateur inconnu</p>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
