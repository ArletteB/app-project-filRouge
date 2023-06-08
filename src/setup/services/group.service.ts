import axios from "axios";

const getAll = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/groups/:id`
  );
  return response.data;
};

const getOne = async (id: number) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/groups/${id}`
  );
  return response.data;
};

const GroupService = {
  getAll,
  getOne,
};

export default GroupService;
