import { UserType } from "../auth/user.type";
import { PostType } from "../group/group.type";

export interface CommentType {
  id: number;
  content: string;
  post: PostType;
  user: UserType;
}
