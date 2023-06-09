// import axios from "axios";
import api from "./api.service";

const GROUP_ENDPOINT = "/groupes";

const create = async (groupes: any) => {
  const response = await api.post(GROUP_ENDPOINT, groupes);
  return response.data;
};

const getOne = async (id: any) => {
  const response = await api.get(`${GROUP_ENDPOINT}/${id}`);
  console.log(response.data);
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

const GroupService = {
  // getAll,
  create,
  getOne,
};

export default GroupService;
