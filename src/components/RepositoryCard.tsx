import LANGUAGE_COLORS from "../data/languageColors";
import { Repository } from "../utils/githubRepositories";
import Chip from "./Chip";

const RepositoryCard = ({ repository }: { repository: Repository }) => {
  const { name, html_url, description, languages, topics } = repository;
  return (
    <div className="m-4 p-4 border border-indigo-900 border-opacity-20 rounded">
      <a
        className="text-xl capitalize"
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{name}</h3>
      </a>
      {topics.map((topic) => (
        <span
          key={topic}
          className="mr-2.5 mb-1 inline-block rounded bg-indigo-50 py-1 px-2 text-xs font-medium text-indigo-900"
        >
          {topic}
        </span>
      ))}
      <div>
        <p className="text-sm">{description}</p>
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
