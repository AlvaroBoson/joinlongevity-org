export interface Profile {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  profileUrl: string;
  category: string[];
  approach: string[];
  evidenceLevel: string;
}

export type ProfileList = Profile[];