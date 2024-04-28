import type { PluginSpec } from 'semantic-release'
import type { GitPluginOpts } from '../types'

/**
 * git
 * @param options
 */
const git = (options: GitPluginOpts = {}): PluginSpec => {
  return [
    '@semantic-release/git',
    {
      assets:
        typeof options.gitAssets === 'boolean'
          ? false
          : ['CHANGELOG.md', 'package.json'].concat(options.gitAssets!).filter(Boolean),
      message: options.message
        ? options.message
        : // eslint-disable-next-line no-template-curly-in-string
          ':bookmark: chore(release): ${nextRelease.gitTag} [skip ci] \n\n${nextRelease.notes}',
    },
  ]
}

export default git
