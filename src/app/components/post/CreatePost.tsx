import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GroupService from "../../../setup/services/group.service";
import { useNavigate } from "react-router-dom";
import { PostCreateDto, PostType } from "../../../setup/types/group/group.type";
import "./createPost.scss";
import { useUserContext } from "../../../setup/contexts/UserContext";
import UploadForm from "./card/UploadForm";

const CreatePost: React.FC = () => {
  const { user } = useUserContext();
  const [groupPosts, setGroupPosts] = useState<PostType[]>([]);
  const { groupId } = useParams();
  const navigate = useNavigate();

  const [legend, setLegend] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedFile, setUploadedFile] = useState<string>("");

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

  const newPost: PostCreateDto = {
    legend,
    description,
    image: uploadedFile,
    groupe: {
      id: Number(groupId),
    },
  };
  const handleSubmit = async (event: React.FormEvent) => {
    console.log("handleSubmit");
    event.preventDefault();

    try {
      const createdPost = await GroupService.createPost(
        Number(groupId),
        newPost
      );
      createdPost.image = uploadedFile;
      setGroupPosts((prevPosts) => [...prevPosts, createdPost]);
      // Réinitialisation des états après la création du post
      setLegend("");
      setDescription("");
      setUploadedFile("");

      // Rediriger vers la page du groupe une fois le post créé
      navigate(`/groupe/${groupId}`);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleUploadComplete = (fileUrl: string) => {
    setUploadedFile(fileUrl);
  };

  return (
    <div className="create-post-content">
      <div className="create-post-container">
        <div className="create-post-wrapper">
          <section className="create-post">
            <header>Créer un post</header>
            <form className="create-post-form" onSubmit={handleSubmit}>
              <div className="create-post-form-content">
                <img src={user?.imgProfile} alt="img" />
                <div className="create-post-form-details">
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
                className="create-post-textarea"
                placeholder="De quoi voulez-vous parler ?"
                required
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
              <UploadForm
                setUploadedFile={handleUploadComplete}
                postImage={newPost.image}
              />

              <button type="submit">Créer le post</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
