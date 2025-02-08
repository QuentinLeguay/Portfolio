import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

interface Repository {
  name: string;
  description: string;
  url: string;
  primaryLanguage: {
    name: string;
  } | null;
  stargazerCount: number;
}

const PinnedRepos: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const GITHUB_LOGIN = process.env.NEXT_PUBLIC_GITHUB_LOGIN;
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  useEffect(() => {
    const fetchPinnedRepos = async () => {
      try {
        const response = await axios.post(
          "https://api.github.com/graphql",
          {
            query: `
              query GetPinnedRepos($username: String!) {
          user(login: $username) {
            pinnedItems(first: 6, types: [REPOSITORY]) {
              nodes {
                ... on Repository {
                  name
                  description
                  url
                  primaryLanguage {
                    name
                  }
                  stargazerCount
                }
              }
            }
          }
        }
            `,
            variables: {
              username: GITHUB_LOGIN,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
            },
          }
        );

        const pinnedRepos = response.data.data.user.pinnedItems.nodes;
        setRepos(pinnedRepos);
      } catch (err) {
        setError("Failed to fetch pinned repositories.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPinnedRepos();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-6" >
      <h1>Pinned Repositories</h1>
      <div className="items-center justify-center bg-gray-900 text-white p-6 flex flex-row flex-wrap" style={{maxWidth: '65%'}} >
        {repos.map((repo) => (
          <Card
          key={repo.name}
          title={repo.name}
          description={repo.description}
          url={repo.url}
          language={repo.primaryLanguage?.name ?? "Unknown"}
          stars={repo.stargazerCount}
          />
        ))}
      </div>
    </div>
  );
};

export default PinnedRepos;
