// import axios from "axios";
import { PostCreateDto, PostType } from "../types/group/group.type";
import api from "./api.service";

const GROUP_ENDPOINT = "/groupes";
const POST_ENDPOINT = "/posts";

const create = async (groupes: any) => {
  const response = await api.post(GROUP_ENDPOINT, groupes);
  return response.data;
};

const getOne = async (id: any) => {
  const response = await api.get(`${GROUP_ENDPOINT}/${id}`);
  return response.data;
};

const getPostsByGroupId = async (groupId: number) => {
  const response = await api.get(`${GROUP_ENDPOINT}/${groupId}/posts`);
  return response.data as PostType[];
};

const createPost = async (groupId: number, post: PostCreateDto) => {
  console.log("post", post);
  try {
    const response = await api.post<PostType>(POST_ENDPOINT, post);
    return response.data;
  } catch (error) {
    console.log("Erreur lors de la création du post :", error);
    throw error;
  }
};

const GroupService = {
  create,
  getOne,
  getPostsByGroupId,
  createPost,
};

export default GroupService;
