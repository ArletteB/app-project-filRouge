import { GroupType } from "../group/group.type";

export interface UserType {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  bio: string;
  imgProfile: string;
  gender: string;
  groupes: GroupType[];
}

export type ResetPassword = {
  token: string;
  password: string;
};
