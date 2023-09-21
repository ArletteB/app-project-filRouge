import EventList from "../../components/event/EventList";
import NavBar from "../../components/ui/Navbar";

export const EventListPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <EventList />
    </div>
  );
};
