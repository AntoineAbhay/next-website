import { z } from "zod";

const GithubRepository = z.object({
  name: z.string(),
  description: z.string().nullish(),
  html_url: z.string(),
  languages_url: z.string(),
  pushed_at: z.string(),
  topics: z.array(z.string()),
});

const GithubRepositories = z.array(GithubRepository);

const GithubRepositoryLanguages = z.record(z.number());

export interface Repository extends z.infer<typeof GithubRepository> {
  languages: z.infer<typeof GithubRepositoryLanguages>;
}

const getGithubRepositories = async (): Promise<Repository[]> => {
  const data = await fetch(
    "https://api.github.com/user/repos?visibility=public&affiliation=owner",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  );
  const repositories = GithubRepositories.parse(await data.json());
  const completeRepositories = await Promise.all(
    repositories.map(async (repository) => {
      const data = await fetch(repository.languages_url, {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      });
      const languages = GithubRepositoryLanguages.parse(await data.json());
      return {
        ...repository,
        languages,
      };
    })
  );
  const sortedRepositories = completeRepositories.sort((repo1, repo2) =>
    repo1.pushed_at < repo2.pushed_at ? 1 : -1
  );

  return sortedRepositories
};

export default getGithubRepositories