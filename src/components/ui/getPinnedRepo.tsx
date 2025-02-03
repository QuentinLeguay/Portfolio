import React, { useEffect, useState } from "react";
import axios from "axios";

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

  const GITHUB_LOGIN = process.env.GITHUB_LOGIN;
  console.log("GITHUB_LOGIN", GITHUB_LOGIN);

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
              username: process.env.GITHUB_LOGIN,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
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
    <div>
      <h1>Pinned Repositories</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.name}>
            <a href={repo.url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
            <p>Language: {repo.primaryLanguage?.name ?? "Unknown"}</p>
            <p>Stars: {repo.stargazerCount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PinnedRepos;
