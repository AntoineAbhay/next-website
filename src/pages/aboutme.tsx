import type { NextPage } from "next";
import RepositoryCard from "../components/RepositoryCard";
import getGithubRepositories, { Repository } from "../utils/githubRepositories";

export const getStaticProps = async (): Promise<{
  props: { repositories: Repository[] };
}> => {
  const repositories = await getGithubRepositories();

  return {
    props: { repositories },
  };
};

const AboutMe: NextPage<{ repositories: Repository[] }> = ({
  repositories,
}) => {
  return (
    <div className="flex flex-col items-center m-4">
      <section>
        <h2 className="text-3xl font-bold">My projects on Github</h2>
        <div className="grid max-w-3xl sm:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl">
          {repositories.map((repository, index) => (
            <RepositoryCard key={index} repository={repository} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
