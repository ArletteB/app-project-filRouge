import api from "./api.service";

const LIKE_ENDPOINT = "/like";

const create = async (postId: number, userId: string) => {
  try {
    const response = await api.post(LIKE_ENDPOINT, { postId, userId });
    return response.data;
  } catch (error) {
    console.log("Erreur lors de la création du like :", error);
    throw error;
  }
};

const LikeService = {
  create,
};

export default LikeService;
