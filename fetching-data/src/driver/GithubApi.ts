import { BranchesJson } from "../domain/Branch.ts"
import { CommitsJson } from "../domain/Commit.ts"

export const fetchBranches = async (owner: string, repository: string): Promise<BranchesJson> => {
    return fetch(`/github-api/repos/${owner}/${repository}/branches`)
        .then(response => response.json())
        .catch(err => console.error(err))
}

export const fetchCommits = async (owner: string, repository: string, branch: string): Promise<CommitsJson> => {
    return fetch(`/github-api/repos/${owner}/${repository}/commits?per_page=3&sha=${branch}`)
        .then(response => response.json())
        .catch(err => console.error(err))
}