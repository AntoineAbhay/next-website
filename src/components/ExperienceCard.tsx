import { Experience } from "../utils/experiencesAndEducation";
import Chip from "./Chip";

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const {
    title,
    excerpt,
    context,
    keyProjects,
    otherContributions,
    keyLearnings,
    companyLink,
    skills,
    location,
    start,
    end,
  } = experience;
  return (
    <div className="border-8 border-slate-900 bg-yellow-200 p-8 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:border-white dark:bg-pink-900">
      <a
        className="text-2xl font-semibold capitalize dark:text-white"
        href={companyLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{title}</h3>
      </a>
      <div className="text-gray-500 dark:text-white">{location}</div>
      <div className="text-gray-500 dark:text-white">
        {start} - {end}
      </div>
      <div className="text-gray-500 dark:text-white">{context}</div>
      <div>
        {skills.map((skill) => {
          const color = skill.backgroundColor || "#ff0000";
          return (
            <Chip key={skill.text} text={skill.text} backgroundColor={color} />
          );
        })}
      </div>
      <div className="pt-2">
        <p className="font-sans leading-relaxed text-slate-600 dark:text-white">
          {excerpt}
        </p>
      </div>
      {keyProjects && (
        <div className="py-4">
          <h4 className="mb-3 pt-2 text-xl font-semibold dark:text-white">
            Key Projects
          </h4>
          <div className="flex flex-col gap-4">
            {keyProjects?.map((keyProject) => (
              <div
                key={keyProject.title}
                className="border-4 border-slate-900 bg-yellow-100 p-4 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] dark:border-white dark:bg-pink-800"
              >
                <div className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  {keyProject.title}
                </div>
                <div className="mb-3 font-sans leading-relaxed text-slate-600 dark:text-white">
                  {keyProject.description}
                </div>
                <div className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <p className="font-sans text-sm text-slate-700 dark:text-white">
                    {keyProject.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {otherContributions && (
        <>
          <h4 className="mb-3 pt-2 text-xl font-semibold dark:text-white">
            Additional Work
          </h4>
          <div className="border-4 border-slate-900 bg-yellow-100 px-2 py-1 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] dark:border-white dark:bg-pink-800">
            {otherContributions?.map((contribution, i) => (
              <div
                key={i}
                className={`p-2 ${
                  i !== otherContributions.length - 1
                    ? "border-b-2 border-slate-900 dark:border-white"
                    : ""
                }`}
              >
                <div className="font-sans font-medium text-slate-600 dark:text-white">
                  {contribution}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {keyLearnings && (
        <>
          <h4 className="mb-3 pt-2 text-xl font-semibold dark:text-white">
            Key Learnings
          </h4>
          <div className="border-4 border-slate-900 bg-yellow-100 px-2 py-1 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] dark:border-white dark:bg-pink-800">
            {keyLearnings?.map((learning, i) => (
              <div
                key={i}
                className={`p-2 ${
                  i !== keyLearnings.length - 1
                    ? "border-b-2 border-slate-900 dark:border-white"
                    : ""
                }`}
              >
                <div className="font-sans font-medium text-slate-600 dark:text-white">
                  {learning}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ExperienceCard;
