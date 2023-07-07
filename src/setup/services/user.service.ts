import { useUserContext } from "../contexts/UserContext";
import api from "./api.service";

const Users_ENDPOINT = "/users";

// const { user } = useUserContext();

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
  const response = await api.put(`${Users_ENDPOINT}/${id}`, users);
  return response.data;
};

const remove = async (id: any) => {
  const response = await api.delete(`${Users_ENDPOINT}/${id}`);
  return response.data;
};

// const joinGroup = async (groupId: number) => {
//   try {
//     if (user) {
//       const response = await api.post(
//         `${Users_ENDPOINT}/${user.id}/group/${groupId}`
//       );
//       return response.data;
//     }
//   } catch (error) {
//     console.log("Erreur lors de la création du post :", error);
//     throw error;
//   }
// };

const UserService = {
  create,
  getOne,
  getAll,
  update,
  remove,
};

export default UserService;
