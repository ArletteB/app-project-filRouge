import { get } from "http";
import api from "./api.service";

const POST_ENDPOINT = "/posts";

const create = async (posts: any) => {
  try {
    const response = await api.post(POST_ENDPOINT, posts);
    return response.data;
  } catch (error) {
    console.log("Erreur lors de la création du post :", error);
    throw error;
  }
};

const getAll = async () => {
  try {
    const response = await api.get(POST_ENDPOINT);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de tous les posts :", error);
    throw error;
  }
};

const getOne = async (id: number) => {
  try {
    const response = await api.get(`${POST_ENDPOINT}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération du post :", error);
    throw error;
  }
};

const PostService = {
  create,
  getAll,
  getOne,
};

export default PostService;
