export interface Profile {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  tags: string[];
  trustScore: number;
  profileUrl: string;
  categories: string[];
  focusAreas: string[];
  type: string;
  trustLevel: string;
}

export type ProfileList = Profile[]; 