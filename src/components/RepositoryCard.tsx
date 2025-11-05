import LANGUAGE_COLORS from "../data/languageColors";
import { Repository } from "../utils/githubRepositories";
import Chip from "./Chip";

const RepositoryCard = ({ repository }: { repository: Repository }) => {
  const { name, html_url, description, languages, topics } = repository;
  return (
    <div className="border-8 border-slate-900 bg-pink-200 p-8 shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] dark:border-white dark:bg-pink-900">
      <a
        className="text-2xl font-semibold capitalize dark:text-white"
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{name}</h3>
      </a>
      {topics.map((topic) => (
        <span
          key={topic}
          className="mr-2.5 mb-1 inline-block bg-yellow-200 py-1 px-2 text-sm font-medium text-indigo-900 dark:bg-cyan-900 dark:text-white"
        >
          {topic}
        </span>
      ))}
      <div>
        <p className="py-2 font-sans text-lg">{description}</p>
      </div>
      <div>
        {Object.keys(languages).map((name) => {
          const color = LANGUAGE_COLORS[name] || "#ff0000";
          return <Chip key={name} text={name} backgroundColor={color} />;
        })}
      </div>
    </div>
  );
};

export default RepositoryCard;
