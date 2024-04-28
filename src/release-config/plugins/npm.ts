import type { PluginSpec } from 'semantic-release'
import type { NPMPluginOpts } from '../types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const npm = (options?: NPMPluginOpts): PluginSpec => {
  const pkg = options?.monorepo ? '@semrel-extra/npm' : '@semantic-release/npm'

  if (
    !options ||
    (typeof options.pkgRoot !== 'string' &&
      typeof options.npmPublish !== 'boolean' &&
      options.tarballDir === undefined)
  )
    return pkg

  return [pkg, options]
}

export default npm
