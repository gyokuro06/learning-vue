type CommitJson = {
    sha: string,
    url: string
}
type BranchJson = {
    name: string,
    commit: CommitJson,
    protected: boolean
}
export type BranchesJson = BranchJson[]