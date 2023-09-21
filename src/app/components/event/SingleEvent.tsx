// SingleEvent.tsx
import { useState, useEffect } from "react";
import EventDetails from "./card/EventDetails";
import EventService from "../../../setup/services/event.service";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BackButton from "../ui/BackButton";

const SingleEvent = () => {
  const { eventId } = useParams<{ eventId: any }>(); // Utilisez useParams pour obtenir l'ID de l'événement depuis l'URL
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const eventData = await EventService.getEventById(eventId);
        setEvent(eventData);
      } catch (error) {
        console.error(
          "Erreur lors du chargement des détails de l'événement",
          error
        );
      }
    };

    fetchEventDetails();
  }, [eventId]);

  return (
    <div id="single-event">
      <BackButton />
      <ToastContainer />
      {event ? (
        <EventDetails eventId={eventId} />
      ) : (
        <div>Chargement en cours...</div>
      )}
    </div>
  );
};

export default SingleEvent;
