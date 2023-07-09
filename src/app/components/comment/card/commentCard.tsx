import { useEffect, useState } from "react";
import CommentService from "../../../../setup/services/comment.service";
import { useUserContext } from "../../../../setup/contexts/UserContext";
import { GroupType, PostType } from "../../../../setup/types/group/group.type";
import AddComment from "./addComment";

interface Props {
  groupId: number;
  post: PostType;
}

const CommentCard = ({ groupId, post }: Props) => {
  const [groupComments, setGroupComments] = useState<any[]>([]);
  const { user } = useUserContext();

  const fetchPostComments = async () => {
    try {
      const comments = await CommentService.getAll();
      setGroupComments(comments);
    } catch (error) {
      console.error("Error fetching post comments:", error);
    }
  };

  const handleCommentAdded = () => {
    if (groupId) {
      fetchPostComments();
    } else {
      console.error("Error adding comment");
    }
  };

  useEffect(() => {
    // ...
    if (groupId) {
      fetchPostComments();
    }
  }, [groupId]);

  const isUserInGroup = user?.groupes?.some(
    (group: GroupType) => group.id === groupId
  );

  return (
    <div className="comment">
      {isUserInGroup && (
        <AddComment postId={post.id} onCommentAdded={handleCommentAdded} />
      )}
      {groupComments.map((comment) => (
        <div key={comment.id} className="comment-card">
          <div className="comment-user-banner">
            <div className="comment-user">
              <div className="avatar">
                <img src={user?.imgProfile} alt="" />
                <span className="stat grey"></span>
              </div>
              <h5>{user?.firstName}</h5>
            </div>
            <button className="comment-btn dropdown">
              <i className="ri-more-line"></i>
            </button>
          </div>
          <div className="content-comment">
            <p>{comment.content}</p>
          </div>
          {/* ... */}
        </div>
      ))}
    </div>
  );
};

export default CommentCard;
