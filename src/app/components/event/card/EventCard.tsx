import { EventType } from "@testing-library/react";
import { useUserContext } from "../../../../setup/contexts/UserContext";

type Props = {
  events: EventType;
};

const EventCard = ({ events }: Props) => {
  const { user } = useUserContext();

  return <div id="event-card"></div>;
};

export default EventCard;
