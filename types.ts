
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  gallery?: string[];
  tags: string[];
  link?: string;
  caseStudy?: {
    problem: string;
    solution: string;
    outcome: string;
    promptUsed?: string;
  };
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface AIExperienceProps {
  onClose: () => void;
}
