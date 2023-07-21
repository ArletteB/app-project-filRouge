import api from "./api.service";

const COMMENT_ENDPOINT = "/comments";

const create = async (comment: any) => {
  const response = await api.post(COMMENT_ENDPOINT, comment);
  return response.data;
};

const getOne = async (id: any) => {
  const response = await api.get(`${COMMENT_ENDPOINT}/${id}`);
  return response.data;
};

const getAll = async () => {
  const response = await api.get(COMMENT_ENDPOINT);
  return response.data;
};
const getAllByPostId = async (post_id: number) => {
  const response = await api.get(`${COMMENT_ENDPOINT}/posts/${post_id}`);
  return response.data;
};

const update = async (id: any, comment: any) => {
  const response = await api.put(`${COMMENT_ENDPOINT}/${id}`, comment);
  return response.data;
};

const remove = async (commentId: number) => {
  const response = await api.delete(`${COMMENT_ENDPOINT}/${commentId}`);
  return response.data;
};

const CommentService = {
  create,
  getOne,
  getAll,
  update,
  remove,
  getAllByPostId,
};

export default CommentService;
