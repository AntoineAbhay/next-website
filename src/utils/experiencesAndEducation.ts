import data from '../data/aboutMe.json';

export interface Experience {
  title: string;
  excerpt: string;
  context?: string;
  keyProjects?: {
    title: string;
    description: string;
    impact: string;
  }[];
  otherContributions?: string[];
  keyLearnings?: string[];
  companyLink: string;
  skills: Skill[];
  location: string;
  start: string;
  end: string;
}

interface Skill {
  text: string;
  backgroundColor: string;
}

const getExperiencesAndEducation = ()=> {
  return {
    experiences: data.experiences,
    education: data.education,
  };
}

export default getExperiencesAndEducation;