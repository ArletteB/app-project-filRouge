const EventList: React.FC = () => {
  return (
    <div id="event-list-content">
      <a className="event-list-card" href="">
        <div className="event-list-image">
          <img src="eventimg.jpg" alt="" />
        </div>
        <div className="event-list-infos">
          <h2>Apero</h2>
          <p>12/15/25</p>
          <p>createurMathieu</p>
        </div>
      </a>
    </div>
  );
};

export default EventList;
