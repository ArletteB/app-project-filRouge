import { useUserContext } from "../../../setup/contexts/UserContext";
import React, { useState, useEffect } from "react";
import { EventType } from "../../../setup/types/event/event.type";
import EventService from "../../../setup/services/event.service";
import { Link } from "react-router-dom";

const EventList: React.FC = () => {
  const { user } = useUserContext();
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    if (user?.postalCode) {
      EventService.getEventsByPostalCode(user.postalCode)
        .then((data) => {
          setEvents(data);
        })
        .catch((error) => {
          console.error("Error fetching events:", error);
        });
    }
  }, [user]);

  return (
    <div id="event-list-content">
      {events.map((event) => (
        <Link
          to={`/events/${event.id}`}
          key={event.id}
          className="event-list-card"
        >
          {event.cover && (
            <div className="event-list-image">
              <img src={event.cover} alt="" />
            </div>
          )}
          <div className="event-list-infos">
            <h2>{event.title}</h2>
            <p>{new Date(event.dateEvent).toLocaleDateString()}</p>
            <p>
              {event.CreatorEvent?.firstName} {event.CreatorEvent?.lastName}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default EventList;
