import { useUserContext } from "../../../../setup/contexts/UserContext";

const LikeCommentCard = () => {
  const { user } = useUserContext();

  return (
    <>
      <div className="btns">
        <div className="left">
          <img src="icons/like.png" alt="like" />
          <h4 className="likes">499</h4>
        </div>
        <div className="right">
          <h4>919 comments 500 shares</h4>
        </div>
      </div>
      <div className="border"></div>
      <div className="icon">
        <div className="like">
          <img
            src="icons/gray_like.png"
            alt="like"
            className="graylike"
            // onclick="likeButton()"
          />
          <img src="icons/comments.png" alt="comments" />
          <img src="icons/share.png" alt="share" />
        </div>
      </div>
      <div className="border_bott"></div>
      <div className="addComments">
        <div className="userimg">
          <img src="icons/User.jpg" alt="user" className="cover" />
        </div>
        <input type="text" className="text" placeholder="Write a comment..." />
      </div>
    </>
  );
};

export default LikeCommentCard;
