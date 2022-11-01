import type { NextPage } from "next";
import ExperienceCard from "../components/ExperienceCard";
import RepositoryCard from "../components/RepositoryCard";
import getExperiencesAndEducation, { Experience } from "../utils/experiencesAndEducation";
import getGithubRepositories, { Repository } from "../utils/githubRepositories";

export const getStaticProps = async (): Promise<{
  props: { repositories: Repository[]; experiences: Experience[]; education: Experience[] };
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
    <div className="flex flex-col max-w-3xl lg:max-w-5xl m-[auto]">
      <section className="m-8">
        <h2 className="text-3xl font-bold mb-8">My projects on Github</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {repositories.map((repository, index) => (
            <RepositoryCard key={index} repository={repository} />
          ))}
        </div>
      </section>
      <section className="m-8">
        <h2 className="text-3xl font-bold mb-8">My professional experiences</h2>
        <div className="flex flex-col gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </section>
      <section className="m-8">
        <h2 className="text-3xl font-bold mb-8">My education</h2>
        <div className="flex flex-col gap-8">
          {education.map((educationItem, index) => (
            <ExperienceCard key={index} experience={educationItem} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
