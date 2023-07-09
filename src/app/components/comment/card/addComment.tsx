import React, { useState, useEffect } from "react";
import CommentService from "../../../../setup/services/comment.service";
import { useUserContext } from "../../../../setup/contexts/UserContext";

interface Props {
  postId: number;

  onCommentAdded: () => void;
}

const AddComment: React.FC<Props> = ({ postId, onCommentAdded }) => {
  const [commentText, setCommentText] = useState("");
  const { user } = useUserContext();

  const fetchPostComments = async () => {
    try {
      await CommentService.getAll();
      onCommentAdded(); // Appeler la fonction de rappel pour mettre à jour la liste des commentaires
    } catch (error) {
      console.error("Error fetching post comments:", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const commentData = {
      content: commentText,
      postId: postId,
      userId: user?.id, // L'ID de l'utilisateur qui écrit le commentaire
    };
    try {
      await CommentService.create(commentData);
      setCommentText("");
      onCommentAdded(); // Appeler la fonction de rappel pour mettre à jour la liste des commentaires
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  useEffect(() => {
    if (postId) {
      fetchPostComments();
    }
  }, [postId]);

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button type="submit">Ajouter un commentaire</button>
    </form>
  );
};

export default AddComment;
