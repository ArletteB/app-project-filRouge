import { useState } from "react";
import { useParams } from "react-router-dom";
import GroupService from "../../../setup/services/group.service";
import { useNavigate } from "react-router-dom";
import { PostCreateDto } from "../../../setup/types/group/group.type";

const CreatePost: React.FC = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();

  const [legend, setLegend] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const newPost: PostCreateDto = {
        legend,
        description,
        image,
      };

      await GroupService.createPost(Number(groupId), newPost);

      // Rediriger vers la page du groupe une fois le post créé
      navigate(`/groupe/${groupId}`);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <h1>Ajouter un post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Légende"
          value={legend}
          onChange={(event) => setLegend(event.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type="file"
          placeholder="URL de l'image"
          accept="image/*"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <button type="submit">Créer le post</button>
      </form>
    </div>
  );
};

export default CreatePost;
