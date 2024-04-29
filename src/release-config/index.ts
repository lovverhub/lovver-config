import type { PluginSpec, Options as SemRelOptions } from 'semantic-release'
import git from './plugins/git'
import github from './plugins/github'
import npm from './plugins/npm'
import type { Options } from './types'

export type { Options } from './types'

export const releaseConfig = (options?: Options): SemRelOptions => {
  const opts = {
    changelogFile: 'CHANGELOG.md',
    changelogTitle: `<a name="readme-top"></a>

    # Changelog`,
    enableGithub: true,
    enableNPM: true,
    ...options,
  }
  //  npm config
  const { npmPublish, pkgRoot, tarballDir, monorepo } = opts
  const npmConfig = npm({ monorepo, npmPublish, pkgRoot, tarballDir })

  // github config
  const {
    githubUrl,
    proxy,
    releasedLabels,
    failTitle,
    githubApiPathPrefix,
    labels,
    failComment,
    assignees,
    addReleases,
    githubAssets,
  } = opts
  const githubConfig = github({
    addReleases,
    assignees,
    failComment,
    failTitle,
    githubApiPathPrefix,
    githubAssets,
    githubUrl,
    labels,
    proxy,
    releasedLabels,
  })

  const plugins: PluginSpec[] = [
    [
      '@semantic-release/release-notes-generator',
      {
        config: 'conventional-changelog-gitmoji-config',
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: opts.changelogFile,
        changelogTitle: opts.changelogTitle,
      },
    ],
    opts.enableNPM ? npmConfig : '',
    opts.enableGithub ? githubConfig : '',
    git(options),
  ]

  return {
    branches: [
      'master',
      'main',
      { channel: 'rc', name: 'rc-*', prerelease: 'rc' },
      { name: 'rc', prerelease: true },
      { channel: 'alpha', name: 'alpha', prerelease: 'alpha' },
      { channel: 'beta', name: 'beta', prerelease: 'beta' },
    ],
    plugins: plugins.filter((p) => !!p),
  }
}
