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
    <div className="flex flex-col items-center">
      <section>
        <h2 className="text-3xl font-bold">Github</h2>
        <div className="grid max-w-3xl sm:grid-cols-2">
          {repositories.map((repository, index) => (
            <RepositoryCard key={index} repository={repository} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
