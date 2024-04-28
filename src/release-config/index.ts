import type { Options } from 'semantic-release'
import createConfig from './createConfig'

const defaultConfig: Options = createConfig()

export default {
  $schema: 'https://json.schemastore.org/semantic-release',
  ...defaultConfig,
}
