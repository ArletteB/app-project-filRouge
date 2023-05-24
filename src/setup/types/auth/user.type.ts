export interface UserType {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  bio: string;
  imgProfile: string;
  gender: string;
  //   token: string;
  //   teacher?: TeacherType;
  //   subject?: SubjectType;
  //   delivrables?: DelivrableType[];
}

export type ResetPassword = {
  token: string;
  password: string;
};
