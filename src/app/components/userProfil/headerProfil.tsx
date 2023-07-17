const HeaderProfil: React.FC = () => {
  return (
    <div className="profile-header">
      <img
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDM2ODA0NA&ixlib=rb-1.2.1&q=85"
        width="60"
        height="60"
        className="avatar"
      />
      <div className="profile-info">
        <h1 className="display-name">John Doe</h1>
      </div>
      {/*  <div className="profile-stats">
      <div className="profile-stat">
        <strong id="followingCount">243</strong>
        <span>Following</span>
      </div>
      <div className="profile-stat">
        <strong id="followerCount">56.7K</strong>
        <span>Followers</span>
      </div>
      <div className="profile-stat">
        <strong id="likeCount">4.22M</strong>
        <span>Likes</span>
      </div>
    </div> */}
      <div className="profile-controls">
        <div className="stacked-button">
          <button className="follow" id="following">
            <span className="follow-text">Modifier profil</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfil;
