export interface Options extends GitPluginOpts, NPMPluginOpts, GithubPluginOpts {
  changelogFile?: string
  changelogTitle?: string
  enableGithub?: boolean
  enableNPM?: boolean
}

export interface GitPluginOpts {
  gitAssets?: string[] | false
  message?: string
}

export interface GithubPluginOpts {
  addReleases?: boolean
  assignees?: string[]
  failComment?: string
  failTitle?: string
  githubApiPathPrefix?: string
  githubAssets?: string[]
  githubUrl?: string
  labels?: string[]

  proxy?: string
  releasedLabels?: string[]

  successComment?: string
}

export interface NPMPluginOpts {
  monorepo?: boolean
  npmPublish?: boolean
  pkgRoot?: string
  tarballDir?: string | false
}
