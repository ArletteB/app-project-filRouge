// import axios from "axios";
import { PostCreateDto, PostType } from "../types/group/group.type";
import api from "./api.service";

const GROUP_ENDPOINT = "/groupes";

const create = async (groupes: any) => {
  const response = await api.post(GROUP_ENDPOINT, groupes);
  return response.data;
};

const getOne = async (id: any) => {
  const response = await api.get(`${GROUP_ENDPOINT}/${id}`);
  return response.data;
};

// const getAll = async () => {
//   const response = await axios.get(
//     `${process.env.REACT_APP_API_URL}/groups/:id`
//   );
//   return response.data;
// };

// const getOne = async (id: number) => {
//   const response = await axios.get(
//     `${process.env.REACT_APP_API_URL}/groups/${id}`
//   );
//   return response.data;
// };
const getPostsByGroupId = async (groupId: number) => {
  const response = await api.get(`${GROUP_ENDPOINT}/${groupId}/posts`);
  return response.data as PostType[];
};
const createPost = async (groupId: number, post: PostCreateDto) => {
  const response = await api.post(`${GROUP_ENDPOINT}/${groupId}/posts`, post);
  return response.data;
};

const GroupService = {
  // getAll,
  create,
  getOne,
  getPostsByGroupId,
  createPost,
};

export default GroupService;
