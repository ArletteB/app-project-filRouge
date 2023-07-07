import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GroupService from "../../../setup/services/group.service";
import { useNavigate } from "react-router-dom";
import { PostCreateDto, PostType } from "../../../setup/types/group/group.type";
import axios from "axios";

const CreatePost: React.FC = () => {
  const [groupPosts, setGroupPosts] = useState<PostType[]>([]);
  const [images, setImages] = useState([]); // Ajouter un state pour stocker les images téléchargées

  const { groupId } = useParams();
  const navigate = useNavigate();

  const [legend, setLegend] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await GroupService.getPostsByGroupId(Number(groupId));
        setGroupPosts(posts);
      } catch (error) {
        console.error("Error fetching group posts:", error);
      }
    };

    fetchPosts();
  }, [groupId]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/photos/?client_id=9zPm1oWOZ703A1ft3AT6FLl40_QSO_MfcvqguZKeF34"
      );
      console.log(response.data);
      const data = await response.data;
      setImages(data);
    } catch (error) {
      console.error("Error fetching group posts:", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const newPost: PostCreateDto = {
        legend,
        description,
        image: image,
        groupe: {
          id: Number(groupId),
        },
      };

      const createdPost = await GroupService.createPost(
        Number(groupId),
        newPost
      );
      const response = await axios.get("https://source.unsplash.com/random");
      newPost.image = response.request.responseURL; // Récupérer l'URL de l'image téléchargée

      setGroupPosts((prevPosts) => [...prevPosts, createdPost]);

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

        {/* <input
          type="file"
          placeholder="URL de l'image"
          accept="image/*"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        /> */}
        <button onClick={fetchAPI}> Ajouter une image</button>
        <div>
          <img src={image} alt="" />
        </div>
        <button type="submit">Créer le post</button>
      </form>
    </div>
  );
};

export default CreatePost;
