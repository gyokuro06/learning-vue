type AuthorJson = {
    name: string,
    email: string,
    date: string
}
type CommitJson = {
    url: string,
    author: AuthorJson,
    message: string,
}
type CommitMetaJson = {
    url: string,
    sha: string,
    html_url: string,
    comments_url: string,
    commit: CommitJson,
}
export type CommitsJson = CommitMetaJson[]

type Author = {
    name: string,
    email: string,
}
type Commit = {
    html_url: string,
    sha: string,
    author: Author,
    date: string,
    message: string,
}
export type Commits = Commit[]

export const toCommits = (json: CommitsJson): Commits => {
    return json.map((j) => {
        return {
            html_url: j.html_url,
            sha: j.sha,
            author: {
                name: j.commit.author.name,
                email: j.commit.author.email,
            },
            date: j.commit.author.date,
            message: j.commit.message,
        }
    })
}