import React from "react";

const PostCard: React.FC = () => {
  return (
    <div className="card">
      <div className="top">
        <div className="user_details">
          <div className="profile_img">
            <img src="icons/User.jpg" alt="user" className="cover" />
          </div>
          <h3>
            Arlette B<br />
            <span className="hour">20 h</span>
            <span className="globDot">.</span>
          </h3>
          <ul>
            <li>
              <img src="icons/globe.png" alt="globe" className="cover" />
            </li>
          </ul>
        </div>
        <div className="dot">
          <img src="icons/dot.png" alt="dot" />
        </div>
      </div>
      <h4 className="message">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum dolorum
        voluptas a eos possimus, accusamus veritatis sint atque similique,
        numquam, earum asperiores? Architecto ad consectetur incidunt tempora
        magnam! Perferendis nam voluptate similique eum hic voluptas ex illo
        repudiandae provident placeat!
      </h4>
      <div className="imgBg">
        <img src="icons/postlist.jpg" alt="bg" className="coverFull" />
      </div>
    </div>
  );
};
