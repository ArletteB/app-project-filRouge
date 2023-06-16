import React, { useState } from "react";
import PostService from "../../../../setup/services/post.service";

const CreatePostCard = () => {
  const [postData, setPostData] = useState({
    legend: "",
    description: "",
    image: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const createdPost = await PostService.create(postData);
      // Faire quelque chose avec le post créé
      console.log("Post créé :", createdPost);
      // Réinitialiser les données du formulaire
      setPostData({
        legend: "",
        description: "",
        image: "",
      });
    } catch (error) {
      // Gérer les erreurs de création de post ici
      console.error("Erreur lors de la création du post :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="legend"
        value={postData.legend}
        onChange={handleInputChange}
        placeholder="Légende"
        required
      />
      <input
        type="text"
        name="description"
        value={postData.description}
        onChange={handleInputChange}
        placeholder="Description"
        required
      />
      <input
        type="text"
        name="image"
        value={postData.image}
        onChange={handleInputChange}
        placeholder="Image URL"
        required
      />
      <button type="submit">Créer le post</button>
    </form>
  );
};

export default CreatePostCard;
