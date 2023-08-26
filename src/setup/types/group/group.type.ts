import { UserType } from "../auth/user.type";

export interface GroupType {
  id: number;
  name: string;
  description: string;
  cover: string;
  city: string;
  postalCode: string;
  users: UserType[];
}

export interface PostType {
  timestamp: string;
  author: string;
  id: number;
  legend: string;
  description: string;
  uploadedFile: string;
  likes: [];
}

export interface PostCreateDto {
  legend: string;
  description: string;
  image: any;
  groupe: {
    id: number;
  };
}
