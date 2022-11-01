import { Experience } from "../utils/experiencesAndEducation";
import Chip from "./Chip";

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const { title, excerpt, companyLink, skills, location, start, end } =
    experience;
  return (
    <div className="rounded-md border border-indigo-900 border-opacity-20 p-4">
      <a
        className="text-xl font-semibold capitalize"
        href={companyLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{title}</h3>
      </a>
      <div className="text-sm text-gray-500">{location}</div>
      <div className="text-sm text-gray-500">
        {start} - {end}
      </div>
      <div className="py-2">
        <p className='whitespace-pre-wrap font-serif'>{excerpt}</p>
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
