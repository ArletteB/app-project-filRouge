import { UserType } from "../auth/user.type";

export interface EventType {
  id: string;
  cover: string;
  title: string;
  dateEvent: Date;
  adress: string;
  description: string;
  CreatorEvent: UserType;
  participants: UserType[];
}
