import { Experience } from "../utils/experiencesAndEducation";
import Chip from "./Chip";

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const { title, excerpt, companyLink, skills, location, start, end } =
    experience;
  return (
    <div className="rounded-md border border-indigo-900 border-opacity-20 p-4 dark:bg-slate-800 dark:border-slate-400">
      <a
        className="text-2xl font-semibold capitalize dark:text-slate-200"
        href={companyLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{title}</h3>
      </a>
      <div className="text-gray-500 dark:text-slate-200">{location}</div>
      <div className="text-gray-500 dark:text-slate-200">
        {start} - {end}
      </div>
      <div className="py-2">
        <p className='text-lg whitespace-pre-wrap font-sans'>{excerpt}</p>
      </div>
      <div>
        {skills.map((skill) => {
          const color = skill.backgroundColor || "#ff0000";
          return (
            <Chip key={skill.text} text={skill.text} backgroundColor={color} />
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceCard;
