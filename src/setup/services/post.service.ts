import api from "./api.service";

const POST_ENDPOINT = "/posts";

const create = async (posts: any) => {
  const response = await api.post(POST_ENDPOINT, posts);
  return response.data;
};

const PostService = {
  create,
};

export default PostService;
