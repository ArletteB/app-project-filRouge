import React, { useEffect, useState } from "react";
import { PostType } from "../../../../setup/types/group/group.type";
import "./postGroupCard.scss";
import GroupService from "../../../../setup/services/group.service";
import CommentCard from "../../comment/card/commentCard";
import CommentService from "../../../../setup/services/comment.service";
import { useUserContext } from "../../../../setup/contexts/UserContext";
import globe from "../../../assets/img/globe.png";
import dot from "../../../assets/img/dot.png";
import UserService from "../../../../setup/services/user.service";

type Props = {
  groupId: number;
};

const PostGroupCard = ({ groupId }: Props) => {
  const [posts, setGroupPosts] = useState<PostType[]>([]);
  const [groupComments, setGroupComments] = useState<any[]>([]);
  const [userInGroup, setUserInGroup] = useState<boolean>(false);
  const { user } = useUserContext();

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
      fetchUserInGroup();
    }
  }, [groupId]);

  const fetchUserInGroup = async () => {
    try {
      const { isInGroup } = await UserService.isUserInGroup(user?.id, groupId);
      setUserInGroup(isInGroup);
    } catch (error) {
      console.error("Error fetching user in group:", error);
    }
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-group-content">
          <div className="post-group-top">
            <div className="post-group-user_details">
              <div className="post-group-profile_img">
                <img
                  src={user?.imgProfile}
                  alt="user-image"
                  className="profile_img-cover"
                />
              </div>
              <h3>
                {post.author}
                <br />
                <span className="hour">{post.timestamp}</span>
                <span className="globDot">.</span>
              </h3>
              <ul>
                <li>
                  <img src={globe} alt="globe" className="profile_img-cover" />
                </li>
              </ul>
            </div>
            <div className="post-group-dot">
              <img src={dot} alt="dot" />
            </div>
          </div>
          <h4 className="post-group-message">{post.description}</h4>
          <img
            className="post-group-image"
            src="https://source.unsplash.com/random/100×100"
            alt=""
          />
          {/* {post.image && post.image.length > 0 && (
            <div className="post-group-imgBg">
              {post.image.map((image: any) => (
                <img
                  src={image.urls.small}
                  alt="bg"
                  className="post-group-coverFull"
                  key={image.id}
                />
              ))}
            </div>
          )} */}
          <div className="comment-content">
            <CommentCard
              groupId={groupId}
              post={post}
              userInGroup={userInGroup}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostGroupCard;
