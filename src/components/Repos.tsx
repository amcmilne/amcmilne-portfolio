import { useState, useEffect, FC } from "react";
import Loading from "./Loading";
import GitHubContent, { RepoNode } from "./GithubContent";
import { requestOptions } from "../queries/Repos";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ReposProps {
  repos: RepoNode[];
}

const Repos: FC<ReposProps> = () => {
  const [repos, setRepos] = useState<RepoNode[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getRepos = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/graphql",
        requestOptions
      );
      const data = await response.json();
      setRepos(data["data"]["viewer"]["repositories"]["nodes"]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("my error is " + error);
    }
  };

  useEffect(() => {
    getRepos();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <GitHubContent repos={repos} />
    </>
  );
};

export default Repos;
