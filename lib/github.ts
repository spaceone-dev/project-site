import base64 from 'base-64';
import utf8 from 'utf8';
import { Octokit } from '@octokit/core';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();
const OWNER = 'spaceone-dev';
const REPO = 'spaceone';
const BRANCH = 'master';
const NOTE_PATH = 'release_notes/ko';

const octokit = new Octokit({
  auth: serverRuntimeConfig.githubAccessToken,
});

export const getRootSha = async (): Promise<string> => {
  try {
    const { data } = await octokit.request('GET /repos/{owner}/{repo}/branches/{branch}', {
      owner: OWNER,
      repo: REPO,
      branch: BRANCH,
    });
    return data.commit.sha;
  } catch (e) {
    console.error(e);
    return '';
  }
};

export const getNoteTree = async (sha: string, recursive = true): Promise<string[]> => {
  const { data } = await octokit.request('GET /repos/{owner}/{repo}/git/trees/{tree_sha}', {
    owner: OWNER,
    repo: REPO,
    tree_sha: sha,
    recursive: recursive as unknown as string,
  });

  const tree = data.tree.find((d) => d.path === NOTE_PATH);
  if (tree) {
    const notes = await getNoteTree(tree.sha, false);
    return notes;
  }

  return data.tree.map((d) => d.path.slice(0, d.path.length - 3));
};

export const getData = async (noteVersion): Promise<string> => {
  const { data } = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: OWNER,
    repo: REPO,
    path: `${NOTE_PATH}/${noteVersion}.md`,
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return utf8.decode(base64.decode((data as any).content));
};
