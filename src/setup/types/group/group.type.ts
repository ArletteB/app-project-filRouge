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
