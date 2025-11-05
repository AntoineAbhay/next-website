import type { NextPage } from "next";
import ExperienceCard from "../components/ExperienceCard";
import RepositoryCard from "../components/RepositoryCard";
import getExperiencesAndEducation, {
  Experience,
} from "../utils/experiencesAndEducation";
import getGithubRepositories, { Repository } from "../utils/githubRepositories";

export const getStaticProps = async (): Promise<{
  props: {
    repositories: Repository[];
    experiences: Experience[];
    education: Experience[];
  };
}> => {
  const repositories = await getGithubRepositories();
  const { experiences, education } = getExperiencesAndEducation();

  return {
    props: { repositories, experiences, education },
  };
};

const AboutMe: NextPage<{
  repositories: Repository[];
  experiences: Experience[];
  education: Experience[];
}> = ({ repositories, experiences, education }) => {
  return (
    <div className="bg-green-200 bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:60px_60px] bg-[position:20px_20px] dark:bg-purple-900 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]">
      <div className="m-[auto] flex max-w-3xl flex-col lg:max-w-5xl">
        <section className="m-8">
          <h2 className="mb-8 text-5xl font-bold dark:text-white">
            <span className="bg-green-200 box-decoration-clone px-2 leading-tight dark:bg-purple-900">
              My professional experiences
            </span>
          </h2>
          <div className="flex flex-col gap-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </section>
        <section className="m-8">
          <h2 className="mb-8 text-5xl font-bold dark:text-white">
            <span className="bg-green-200 box-decoration-clone px-2 leading-tight dark:bg-purple-900">
              My education
            </span>
          </h2>
          <div className="flex flex-col gap-8">
            {education.map((educationItem, index) => (
              <ExperienceCard key={index} experience={educationItem} />
            ))}
          </div>
        </section>
        <section className="m-8">
          <h2 className="mb-8 text-5xl font-bold dark:text-white">
            <span className="bg-green-200 box-decoration-clone px-2 leading-tight dark:bg-purple-900">
              My projects on Github
            </span>
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {repositories.map((repository, index) => (
              <RepositoryCard key={index} repository={repository} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
