export interface GroupType {
  id: number;
  name: string;
  description: string;
  cover: string;
  postalCode: string;
  users: User[];
}

export interface User {
  id: number;
  name: string;
}

export interface PostType {
  timestamp: string;
  author: string;
  id: number;
  legend: string;
  description: string;
  image: string;
}

export interface PostCreateDto {
  legend: string;
  description: string;
  image: string;
  groupe: {
    id: number;
  };
}
