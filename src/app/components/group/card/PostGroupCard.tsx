import React, { useEffect, useState } from "react";
import axios from "axios";
import { PostType } from "../../../../setup/types/group/group.type";

type Props = {
  groupId: number;
};

const PostGroupCard = ({ groupId }: Props) => {
  const [posts, setGroupPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchGroupPosts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/groupes/${groupId}/posts`
        );
        const posts = response.data;
        setGroupPosts(posts);
      } catch (error) {
        console.error("Error fetching group posts:", error);
      }
    };

    fetchGroupPosts();
  }, [groupId]);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="card">
          <div className="top">
            <div className="user_details">
              <div className="profile_img">
                <img src="icons/User.jpg" alt="user" className="cover" />
              </div>
              <h3>
                {/* {post.author} */}
                <br />
                {/* <span className="hour">{post.timestamp}</span>
                <span className="globDot">.</span> */}
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
          <h4 className="message">{post.description}</h4>
          {post.image && (
            <div className="imgBg">
              <img src={post.image} alt="bg" className="coverFull" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostGroupCard;
