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

const update = async (id: any, comment: any) => {
  const response = await api.put(`${COMMENT_ENDPOINT}/${id}`, comment);
  return response.data;
};

const remove = async (id: any) => {
  const response = await api.delete(`${COMMENT_ENDPOINT}/${id}`);
  return response.data;
};

const isUserInGroup = async (id: any, groupId: any) => {
  const response = await api.get(`${COMMENT_ENDPOINT}/${id}/groups/${groupId}`);
  return response.data;
};

const CommentService = {
  create,
  getOne,
  getAll,
  update,
  remove,
  isUserInGroup,
};

export default CommentService;
