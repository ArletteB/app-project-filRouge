import React, { useEffect, useState } from "react";
import { PostType } from "../../../../setup/types/group/group.type";
import "./postGroupCard.scss";
import GroupService from "../../../../setup/services/group.service";
import CommentCard from "../../comment/card/commentCard";
import CommentService from "../../../../setup/services/comment.service";

type Props = {
  groupId: number;
};

const PostGroupCard = ({ groupId }: Props) => {
  const [posts, setGroupPosts] = useState<PostType[]>([]);
  const [groupComments, setGroupComments] = useState<any[]>([]);

  useEffect(() => {
    const fetchGroupPosts = async () => {
      try {
        console.log(groupId);
        const posts = await GroupService.getPostsByGroupId(groupId);
        setGroupPosts(posts);
      } catch (error) {
        console.error("Error fetching group posts:", error);
      }
    };
    if (groupId) {
      fetchGroupPosts();
      fetchPostComments();
    }
  }, [groupId]);

  const fetchPostComments = async () => {
    try {
      const comments = await CommentService.getAll();
      setGroupComments(comments);
    } catch (error) {
      console.error("Error fetching post comments:", error);
    }
  };

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
          <div className="comment-content">
            <CommentCard groupId={groupId} post={post} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostGroupCard;
