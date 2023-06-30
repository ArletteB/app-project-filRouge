export interface UserType {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  bio: string;
  imgProfile: string;
  gender: string;
}

export type ResetPassword = {
  token: string;
  password: string;
};
