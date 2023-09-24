import configFile from '@cfg/config.json'

type TConfig = typeof configFile

export default function getConfig (): TConfig {
  if (configFile === undefined && configFile === null && typeof configFile === 'undefined') throw new Error('error not soche  cfg file')
  return configFile
}
