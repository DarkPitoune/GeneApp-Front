export default interface ProfileInfoInterface {
  Nom: String;
  Biographie: String;
  Naissance: String;
  Mariage: String;
  Mort: String;
  Parents: { data: { id: number; attributes: ProfileInfoInterface }[] };
  Enfants: { data: { id: number; attributes: ProfileInfoInterface }[] };
  Conjoint: { data: { id: number; attributes: ProfileInfoInterface } };
}
