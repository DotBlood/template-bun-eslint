export interface ILoggerConfig {
  mode: 'debug' | 'prod' | 'develop'
  pathToLogsDir: string | undefined
  metadata: object | undefined
  prefix: string | undefined
}
