import { useEffect, useState, useRef } from "react";
import CommentService from "../../../../setup/services/comment.service";
import { useUserContext } from "../../../../setup/contexts/UserContext";
import { GroupType, PostType } from "../../../../setup/types/group/group.type";
import "./comment.scss";
import AddComment from "./addComment";
import { BsThreeDots } from "react-icons/bs";

interface Props {
  groupId: number;
  post: PostType;
  userInGroup: boolean;
}

const CommentCard = ({ groupId, post, userInGroup }: Props) => {
  const [groupComments, setGroupComments] = useState<any[]>([]);
  const { user } = useUserContext();
  const [activeCommentIndex, setActiveCommentIndex] = useState<number | null>(
    null
  );
  const dropdownRef = useRef<HTMLButtonElement | null>(null);

  const fetchPostComments = async () => {
    try {
      const comments = await CommentService.getAllByPostId(post.id);
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

  useEffect(() => {
    const handleClickOutsideOptions = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveCommentIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutsideOptions);
    return () => {
      document.removeEventListener("click", handleClickOutsideOptions);
    };
  }, []);

  const handleDeleteComment = async (commentId: number) => {
    try {
      await CommentService.remove(commentId);
      // Mettez à jour la liste des commentaires après la suppression réussie
      fetchPostComments();
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <div className="comment">
      {userInGroup && (
        <AddComment postId={post.id} onCommentAdded={handleCommentAdded} />
      )}
      {groupComments.map((comment, index) => (
        <div key={comment.id} className="comment-card">
          <div className="comment-user-banner">
            <div className="comment-user">
              <div className="avatar">
                <img src={user?.imgProfile} alt="" />
                <span className="stat grey"></span>
              </div>
              <h5>{user?.firstName}</h5>
            </div>
            <button
              className="comment-btn dropdown"
              onClick={() => {
                // Si l'index du commentaire actuel est déjà actif, le désactiver
                if (activeCommentIndex === index) {
                  setActiveCommentIndex(null);
                } else {
                  // Sinon, activer l'index du commentaire actuel
                  setActiveCommentIndex(index);
                }
              }}
            >
              <BsThreeDots />
            </button>
            {activeCommentIndex === index && (
              <div className="comment-options">
                <p>Modifier le commentaire</p>
                <p onClick={() => handleDeleteComment(comment.id)}>
                  Supprimer le commentaire
                </p>
              </div>
            )}
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
