import { PortraitResponse } from './portrait';

export interface Profile {
  Nom: string;
  Biographie: string;
  Naissance: string;
  Mariage: string;
  Mort: string;
  Parents: { data: ProfileResponse[] };
  Enfants: { data: ProfileResponse[] };
  Conjoint: { data: ProfileResponse };
  Portrait: { data: [PortraitResponse] };
}

export interface ProfileResponse {
  id: number;
  attributes: Profile;
}
