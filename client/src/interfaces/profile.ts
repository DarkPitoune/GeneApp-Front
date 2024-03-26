export interface Profile {
  id: string;
  sex: "M" | "F";
  name: string;
  birthDate: string;
  deathDate?: string;
  notes?: string;
  description: string;
  labels?: string[];
}
