import api from "./api.service";

const Users_ENDPOINT = "/users";

const create = async (users: any) => {
  const response = await api.post(Users_ENDPOINT, users);
  return response.data;
};

const getOne = async (id: any) => {
  const response = await api.get(`${Users_ENDPOINT}/${id}`);
  return response.data;
};

const getAll = async () => {
  const response = await api.get(Users_ENDPOINT);
  return response.data;
};

const update = async (id: any, users: any) => {
  const response = await api.patch(`${Users_ENDPOINT}/${id}`, users); // Utilisez patch au lieu de put
  return response.data;
};

const remove = async (id: any) => {
  const response = await api.delete(`${Users_ENDPOINT}/${id}`);
  return response.data;
};

const isUserInGroup = async (userId: any, groupId: number) => {
  const response = await api.get(
    `${Users_ENDPOINT}/${userId}/groups/${groupId}`
  );
  return response.data;
};

const findOneWithGroups = async (id: any) => {
  const response = await api.get(`${Users_ENDPOINT}/${id}/groups`);
  return response.data;
};

const UserService = {
  create,
  getOne,
  getAll,
  update,
  remove,
  findOneWithGroups,
  isUserInGroup,
};

export default UserService;
