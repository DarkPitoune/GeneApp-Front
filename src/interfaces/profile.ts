export interface Profile {
  Nom: string;
  Biographie: string;
  Naissance: string;
  Mariage: string;
  Mort: string;
  Parents: { data: ProfileResponse[] };
  Enfants: { data: ProfileResponse[] };
  Conjoint: { data: ProfileResponse };
}

export interface ProfileResponse {
  id: number;
  attributes: Profile;
}
