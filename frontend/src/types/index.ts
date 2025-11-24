export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  imageUrls: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  category: string;
  featured: boolean;
  createdDate: string;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  proficiencyLevel: number;
  yearsOfExperience?: number;
  iconUrl?: string;
}