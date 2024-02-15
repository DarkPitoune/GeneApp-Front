import { Profile } from "./profile";

export interface Marriage {
  id: string;
  expand: {
    husband: Profile;
    wife: Profile;
  };
}
