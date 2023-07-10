import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GroupService from "../../../setup/services/group.service";
import { useNavigate } from "react-router-dom";
import { PostCreateDto, PostType } from "../../../setup/types/group/group.type";
import axios from "axios";
import "./createPost.scss";
import { useUserContext } from "../../../setup/contexts/UserContext";
// import Images from "./card/Images";
import IndividualImage from "./card/IndividualImage";

interface ImageData {
  id: string;
  urls: {
    small: string;
  };
}

const CreatePost: React.FC = () => {
  const { user } = useUserContext();
  const [groupPosts, setGroupPosts] = useState<PostType[]>([]);
  const [images, setImages] = useState(""); // Ajouter un state pour stocker les images téléchargées

  const { groupId } = useParams();
  const navigate = useNavigate();

  const [legend, setLegend] = useState("");
  const [description, setDescription] = useState("");
  // const [image, setImage] = useState("");

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
        "https://api.unsplash.com/photos/random/?client_id=9zPm1oWOZ703A1ft3AT6FLl40_QSO_MfcvqguZKeF34"
      );
      const data = await response.data;
      setImages(data);
    } catch (error) {
      console.error("Error fetching group posts:", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // const imageUrls = images.map((image) => image.urls.small);
      const newPost: PostCreateDto = {
        legend,
        description,
        image: images,
        groupe: {
          id: Number(groupId),
        },
      };

      const createdPost = await GroupService.createPost(
        Number(groupId),
        newPost
      );
      setGroupPosts((prevPosts) => [...prevPosts, createdPost]);

      // Rediriger vers la page du groupe une fois le post créé
      // navigate(`/groupe/${groupId}`);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="body">
      <div className="container">
        <div className="wrapper">
          <section className="post">
            <header>Créer un post</header>
            <form onSubmit={handleSubmit}>
              <div className="content">
                <img src="icons/logo.png" alt="img" />
                <div className="details">
                  <p>{user?.firstName}</p>
                </div>
              </div>
              <input
                type="text"
                placeholder="Légende"
                value={legend}
                onChange={(event) => setLegend(event.target.value)}
              />
              <textarea
                placeholder="De quoi voulez-vous parler ?"
                required
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />

              {/* <button onClick={fetchAPI}> Ajouter une image</button> */}
              <div>
                {/* {images.map((image: { id: any }) => (
                  <IndividualImage key={image.id} image={image} />
                ))} */}
              </div>
              <button type="submit">Créer le post</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
