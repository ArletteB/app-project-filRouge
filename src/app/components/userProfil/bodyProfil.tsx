import { FaBorderAll, FaCalendarDays } from "react-icons/fa6";

const BodyProfile: React.FC = () => {
  return (
    <div className="profile-body">
      <div className="profile-tabs">
        <button className="profile-tab selected">
          <FaBorderAll />
        </button>
        <button className="profile-tab">
          <FaCalendarDays />
        </button>
      </div>
      <div className="profile-body-section">
        <img
          src="https://images.unsplash.com/photo-1638628281370-2d2b76686a4f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDM4NTAwMQ&ixlib=rb-1.2.1&q=85"
          width="110"
        />
        <img
          src="https://images.unsplash.com/photo-1635110060340-097353a501c6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDM4NTEwMQ&ixlib=rb-1.2.1&q=85"
          width="110"
        />
        <img
          src="https://images.unsplash.com/photo-1639891906817-a24d436359bb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDM4NTAwMQ&ixlib=rb-1.2.1&q=85"
          width="110"
        />
        <img
          src="https://images.unsplash.com/photo-1639433506654-51d94fd9899e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDM4NTE1Nw&ixlib=rb-1.2.1&q=85"
          width="110"
        />
        <img
          src="https://images.unsplash.com/photo-1637781127773-5ce8c6d7638b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDM4NTUzMg&ixlib=rb-1.2.1&q=85"
          width="110"
        />
        <img
          src="https://images.unsplash.com/photo-1639230464573-a1bae9ff0996?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDM4NTYyNg&ixlib=rb-1.2.1&q=85"
          width="110"
        />
      </div>
    </div>
  );
};

export default BodyProfile;
